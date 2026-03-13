package com.bianolini.calcolocodicefiscale;

import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class CodFiscaleController {
    @FXML
    private Label welcomeText;

    @FXML
    protected void onHelloButtonClick() {
        welcomeText.setText("Welcome to JavaFX Application!");
    }
}