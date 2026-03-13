package com.bianolini.bianolini_verifica;

import javafx.fxml.FXML;
import javafx.scene.control.*;

public class CampeggioController {
    @FXML
    private Label LblPrezzo;
    @FXML
    private TextField TxfNome;
    @FXML
    private TextField TxfNpiazzola;
    @FXML
    private TextField TxtNAdulti;
    @FXML
    private TextField TxtNBambini;
    @FXML
    private DatePicker DtpInizio;
    @FXML
    private DatePicker DtpFine;
    @FXML
    private ChoiceBox ChoTipoPIazzola;
    @FXML
    private RadioButton RdbAnimSi;
    private RadioButton RdbAnimNo;



    @FXML
    protected void onHelloButtonClick() {
        LblPrezzo.setText("Welcome to JavaFX Application!");
    }
}