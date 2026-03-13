module com.bianolini.es_7 {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.bianolini.es_7 to javafx.fxml;
    exports com.bianolini.es_7;
}