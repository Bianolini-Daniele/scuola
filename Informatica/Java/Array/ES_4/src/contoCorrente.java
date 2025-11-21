public class contoCorrente {
    private String nome;
    private String cognome;
    private String codice;
    private double saldo;

    // Costruttore
    public contoCorrente(String nome, String cognome, String codice) {
        this.nome = nome;
        this.cognome = cognome;
        this.codice = codice;
        this.saldo = 0.0; // saldo iniziale a 0
    }

    // Metodo per prelevare denaro
    public double preleva(double importo) {
//        if (importo > 0 && saldo - importo >= 0) {
//            saldo -= importo;
//        }
//        return saldo;
        if (importo < 0 || this.saldo - importo < 0){
            return this.saldo;
        }
        this.saldo -= importo;
        return this.saldo;
    }

    // Metodo per depositare denaro
    public double deposita(double importo) {
        if (importo > 0) {
            saldo += importo;
        }
        return saldo;
    }

    // Getter per il saldo
    public double getSaldo() {
        return saldo;
    }

    // Getter per il codice
    public String getCodice() {
        return codice;
    }

    // Getter per il nominativo completo
    public String getNominativo() {
        return nome + " " + cognome;
    }

    @Override
    public String toString() {
        return "ContoCorrente{" +
                "nome='" + nome + '\'' +
                ", cognome='" + cognome + '\'' +
                ", codice='" + codice + '\'' +
                ", saldo=" + saldo +
                '}';
    }
}