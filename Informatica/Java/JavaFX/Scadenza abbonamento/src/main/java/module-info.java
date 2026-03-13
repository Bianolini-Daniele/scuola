module com.bianolini.scadenza_abbonamento {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.bianolini.scadenza_abbonamento to javafx.fxml;
    exports com.bianolini.scadenza_abbonamento;
}