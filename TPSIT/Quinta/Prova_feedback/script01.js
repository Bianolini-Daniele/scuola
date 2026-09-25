const formFeedback = document.getElementById("formFeedback");
const messaggio = document.getElementById("messaggio");
const tabellaFeedback = document.getElementById("tabellaFeedback");
formFeedback.addEventListener("submit", gestiscisubmit);
const dati = [];

function creaRiga(valori) {
    const campi = ["nome", "email", "data", "ora", "tipo", "messaggio", "checkbox"];
    const riga = document.createElement("tr");
    for (let i=0; i < campi.length; i++) {
        const cella = document.createElement("td");
        cella.textContent = valori[campi[i]];
        riga.appendChild(cella);
    }
    // return riga;


 const cellaAzioni = document.createElement("td");
 const bottoneElimina = document.createElement("button");
 bottoneElimina.textContent = "Elimina";

    bottoneElimina.addEventListener("click", function () {
        const indice = dati.indexOf(valori);
        if (indice !== -1) {
            dati.splice(indice, 1);
        }
        riga.remove();
    });

    cellaAzioni.appendChild(bottoneElimina);
    riga.appendChild(cellaAzioni);
    tabellaFeedback.appendChild(riga);


}



function gestiscisubmit(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;
    const ora = document.getElementById("ora").value;
    const tipofeedback = document.getElementById("tipo").value;
    const testofeedback = document.getElementById("messaggio").value.trim();
    const newsletter = document.getElementById("checkbox").checked;

    if (!nome || !email || !data || !ora || !tipofeedback || !testofeedback) {
        messaggio.textContent = "Compila tutti i campi obbligatori.";
        return;
    }

    const iscrizione = newsletter ? "Sì" : "No";
    const valori = { nome, email, data, ora, tipofeedback, testofeedback, iscrizione };
    dati.push(valori);
    creaRiga(valori);

    // aggiungiCellaAzioni(riga, valori);

    // tabellaFeedback.appendChild(riga);
    messaggio.textContent = "";
    formFeedback.reset();
}
