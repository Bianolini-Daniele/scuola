module com.bianolini.gioco_delle_carte {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.bianolini.gioco_delle_carte to javafx.fxml;
    exports com.bianolini.gioco_delle_carte;
}