package com.bianolini.bianolini_verifica;

import java.time.LocalDate;
import java.util.HashMap;
import java.lang.String;

public class Campeggio {
    private LocalDate inizioAlta = LocalDate.of(26,6,1);
    private LocalDate fineAlta = LocalDate.of(26, 8, 31);
    private int stagione;
    private HashMap<String, String> Prezzi_Alta;
    private HashMap<String, String> Prezzi_Bassa;
    private Boolean animali;
    private int bambini;
    private int adulti;
    private String piazzola;

    public Campeggio() {
        this.inizioAlta = inizioAlta;
        this.fineAlta = fineAlta;
        this.stagione = stagione;
        this.Prezzi_Alta = Prezzi_Alta;
        this.Prezzi_Bassa = Prezzi_Bassa;
        this.animali = animali;
        this.bambini = bambini;
        this.adulti = adulti;
        this.piazzola = piazzola;
    }

    private String Stagione(int n){
        if(n == 0){
            return "Bassa";
        } else {
            return "Alta";
        }
    }

    public String getStagione(LocalDate inizio, LocalDate fine){
        if(inizio.isAfter(inizioAlta) && fine.isBefore(fineAlta)){
            stagione = 1;
        } else {
            stagione= 0;
        }
        return Stagione(stagione);
    }

    public void addAnimali(Boolean animali){
        if(animali){
            this.animali = true;
        } else {
            this.animali = false;
        }
    }

    public void addTipoPIazzola(int n){
        if(n==1){
            piazzola = "Basic";
        } else if (n == 2){
            piazzola = "Comfort";
        } else {
            piazzola = "Comfort plus";
        }
    }

    private void Mappe(){
        this.Prezzi_Bassa.put("Basic","36.50");
        this.Prezzi_Bassa.put("Comfort","40.50");
        this.Prezzi_Bassa.put("Comfort plus","43.00");
        this.Prezzi_Alta.put("Basic","42.50");
        this.Prezzi_Alta.put("Comfort","45.00");
        this.Prezzi_Alta.put("Comfort plus","50.00");

    }

    private int przPiazzola(){
        if(stagione == 0){

            return Prezzi_Bassa.get(this.piazzola);
        }
    }

}
