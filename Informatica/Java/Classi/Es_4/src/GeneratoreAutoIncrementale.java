

public class GeneratoreAutoIncrementale {
    private String codice;
    private String lettere;
    private int zeri;
    private int cifra;


    public GeneratoreAutoIncrementale (String lettere, int cifre) {
        this.lettere = lettere;
        this.cifra = cifre;
    }

    public String genera (String lettere, int cifra) {
        double max;
        this.cifra = cifra;
        max = Math.pow(10, cifra);
        max--;
        if(cifra == max){
            return "Codici esauriti";
        }

    }




    @Override
    public String toString () {
        return "Prefisso: " + this.lettere + ", ultimo valore generato: " + this.cifra;
    }
}

