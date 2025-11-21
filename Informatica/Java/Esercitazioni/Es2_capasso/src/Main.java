import java.util.Scanner;
//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner (System.in);
        int a, b, c, mag = 0;
        System.out.println("Inserisci tre numeri interi: ");
        a = in.nextInt();
        b = in.nextInt();
        c = in.nextInt();

        if(a > mag) {
            mag = a;
        }
        if (b > mag){
            mag = b;
        }
        if (c > mag){
            mag = c;
        }
        System.out.println("Il numero maggiore è " + mag);
    }
}