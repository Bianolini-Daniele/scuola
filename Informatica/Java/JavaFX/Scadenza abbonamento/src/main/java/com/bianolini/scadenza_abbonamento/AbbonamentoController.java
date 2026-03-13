package com.bianolini.scadenza_abbonamento;

import javafx.fxml.FXML;
import javafx.scene.control.DatePicker;
import javafx.scene.control.Label;
import javafx.scene.control.RadioButton;
import javafx.scene.control.ToggleGroup;

import java.time.LocalDate;

public class AbbonamentoController {
    @FXML
    private Label lblSelez_data;
    @FXML
    private Label lblSelez_abbonamento;
    @FXML
    private Label lblScadenza;
    @FXML
    private Label lblRisultato;
    @FXML
    private DatePicker dtpSelezione;
    @FXML
    private RadioButton rdbMensile;
    @FXML
    private RadioButton rdbSemestrale;
    @FXML
    private RadioButton rdbAnnuale;




    @FXML
    private void calcolaScadenza() {

        ToggleGroup gruppoAbbonamenti = new ToggleGroup();
        rdbMensile.setToggleGroup(gruppoAbbonamenti);
        rdbSemestrale.setToggleGroup(gruppoAbbonamenti);
        rdbAnnuale.setToggleGroup(gruppoAbbonamenti);

        LocalDate dataInizio = dtpSelezione.getValue();
        if (dataInizio == null) {
            lblRisultato.setText("Seleziona una data di inizio.");
            return;
        }
        if (gruppoAbbonamenti.getSelectedToggle() == null) {
            lblRisultato.setText("Seleziona un tipo di abbonamento.");
            return;
        }

        LocalDate dataFine = dataInizio;

        if (rdbMensile.isSelected()) {
            dataFine = dataInizio.plusMonths(1);
        }
        else if (rdbSemestrale.isSelected()) {
            dataFine = dataInizio.plusMonths(6);
        }
        else if (rdbAnnuale.isSelected()) {
            dataFine = dataInizio.plusYears(1);
        }
        lblRisultato.setText("La data di scadenza è: " + dataFine.toString());
    }
}