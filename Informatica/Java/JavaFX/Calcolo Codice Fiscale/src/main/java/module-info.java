module com.bianolini.calcolocodicefiscale {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.bianolini.calcolocodicefiscale to javafx.fxml;
    exports com.bianolini.calcolocodicefiscale;
}