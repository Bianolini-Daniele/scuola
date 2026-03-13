module com.bianolini.bianolini_verifica {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.bianolini.bianolini_verifica to javafx.fxml;
    exports com.bianolini.bianolini_verifica;
}