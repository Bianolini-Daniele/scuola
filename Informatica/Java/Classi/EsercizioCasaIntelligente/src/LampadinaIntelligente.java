public class LampadinaIntelligente {
    private int potenza;
    private int qta;
    private String colore;
    private String nome;
    private boolean acceso;

    public LampadinaIntelligente(int potenza){
        if (potenza < 0) {
            potenza = - potenza;
        }
        this.potenza = potenza;
        this.nome = "";
        this.qta = 50;
        this.colore = "bianco";
    }

    public int getPotenza(){
        return this.potenza;
    }

    public String getNome(){
        return this.nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getColore(){
        return this.colore;
    }

    public void setColore(String colore){
        this.colore = colore;
    }

    public void spegni(boolean acceso){
        this.acceso = false;
    }

    public void accendi(boolean acceso){
        this.acceso = true;
    }

    public void aggiungi_qta(int qta){
        if(qta < 100) {
            this.qta += 10;
        }
    }
    public void togli_qta(int qta){
        if(qta > 0) {
            this.qta -= 10;
        }
    }


    @Override
    public String toString(){

    }
}
