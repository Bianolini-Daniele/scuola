import java.util.Scanner;
//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner (System.in);
        double a, b;
        System.out.println("Inserisci due variabili double comprese tra uno miliardo e due miliardi: ");
        a = in.nextInt();
        while(a > 2000000000 && a < 1000000000){
            System.out.println("Valore non valido, inseriscine un altro: ");
            a = in.nextInt();
        }
        b = in.nextInt();
        while(b > 2000000000 && b < 1000000000){
            System.out.println("Valore non valido, inseriscine un altro: ");
            b = in.nextInt();
        }
        System.out.println((a+b) + " " + (a-b) + " " + (a*b));
    }
}