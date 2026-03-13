package com.bianolini.scadenza_abbonamento;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class AbbonamentoApplication extends Application {

    @Override
    public void start(Stage stage) throws Exception {

        FXMLLoader fxmlLoader = new FXMLLoader(
                AbbonamentoApplication.class.getResource(
                        "/Scadenza_abbonamento/src/main/java/resources/com.bianolini.scadenza_abbonamento/hello-view.fxml"
                )
        );

        Scene scene = new Scene(fxmlLoader.load());
        stage.setTitle("Scadenza Abbonamento");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}
