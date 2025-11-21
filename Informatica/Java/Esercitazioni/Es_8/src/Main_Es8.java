import java.util.Scanner;
//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner (System.in);
        int t = 10^12;
        float n;
        System.out.println("Inserisci un numero: ");
        n = in.nextFloat();
        System.out.println(n/t);
    }
}