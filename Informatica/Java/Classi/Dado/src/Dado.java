import java.util.Random;

public class Dado {

    Random random = new Random;
    private int n;
    private int facce;

    public Dado (){
        n = 6;
    }
    public Dado (int n){
        this.n = n;
        if (n <= 3) {
            n = 6;
        }
    }

    public int facce (){
        this.facce = random.nextInt(n + 1);
        return facce;
    }
}
