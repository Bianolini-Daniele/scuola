import graphics.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
//        Line l = new Line (0,0, 300, 300);
//        l.draw();
//        Ellipse e = new Ellipse(100, 100, 100, 100);
//        e.draw();
        Scanner in = new Scanner (System.in);
        System.out.println("Vuoi disegnare un cerchio (1) o un rettangolo(2)?");
        int scelta= in.nextInt();
        if(scelta == 1){
            Ellipse f = new Ellipse(100, 100, 100, 100);
            f.fill();
            f.draw();
        } else if (scelta == 2){
            Rectangle r = new Rectangle (50, 100, 200, 400);
            r.setColor(new Color(255,0,0));
            r.fill();
            r.draw();
        }
    }
}