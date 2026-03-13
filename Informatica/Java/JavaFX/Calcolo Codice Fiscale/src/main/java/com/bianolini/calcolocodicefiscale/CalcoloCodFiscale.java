package com.bianolini.calcolocodicefiscale;
import java.time.LocalDate;


public class CalcoloCodFiscale {
    private String nome;
    private String cognome;
    private LocalDate data;
    private int anno;
    private int mese;
    private int giorno;
    private int sesso;
    private char controllo;

    public CalcoloCodFiscale() {
        String nome = this.nome;
        String cognome = this.cognome;
        LocalDate data = this.data;
        int anno = this.data.getYear();
        int mese = this.data.getMonthValue();
        int giorno = this.data.getDayOfMonth();
        int sesso = this.sesso;
        char controllo = this.controllo;
    }
    
}
