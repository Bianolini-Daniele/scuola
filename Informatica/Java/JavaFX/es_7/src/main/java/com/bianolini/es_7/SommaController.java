package com.bianolini.es_7;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class SommaController {
    @FXML
    private Label Risultato;

    @FXML
    private TextField a;

    @FXML
    private TextField b;

    @FXML
    protected void onSommaButtonClick() {
        int n1 = Integer.parseInt(a.getText());
        int n2 = Integer.parseInt(b.getText());
        int somma = n1+n2;
        Risultato.setText("" + somma);
    }
}