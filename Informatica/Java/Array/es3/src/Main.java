import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        double[] a;
        a = new double[10];
        for (int i = 0; i < 10; i++) {
            a[i] = Math.random();
        }
        
        for (int i = 0; i < 10; i++) {
            System.out.print(i + " ");
        }
        System.out.println("");
        for (int i = 0; i < 10; i++) {
            System.out.print(a[i] + " ");
        }
    }
}