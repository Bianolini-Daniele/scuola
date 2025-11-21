import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner (System.in);
        int n;
        float f;
        double d;
        System.out.println("Inserisci una variabile intera, un float e un double: ");
        n = in.nextInt();
        f = in.nextFloat();
        d = in.nextDouble();
        System.out.println("Hai inserito " + d + " " + f + " " + n);
    }
}