
const formFeedback = document.getElementById("formFeedback");
const messaggio = document.getElementById("avviso");
const tabellaFeedback = document.getElementById("tabellaFeedback");
const eliminaTutto = document.getElementById("eliminaTutto");
formFeedback.addEventListener("submit", gestiscisubmit);
eliminaTutto.addEventListener("click", cancellaTutto);        


//const dati = [];

//prendo le string dal localstorage e le converte in codice javascript

const dati = JSON.parse(localStorage.getItem("feedback")) || [];


function salvaDati(){
    localStorage.setItem("feedback", JSON.stringify(dati));
}


function creaRiga(valori) {
    const campi = ["nome", "email", "data", "ora", "tipofeedback", "testofeedback", "iscrizione"];
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
        salvaDati(); // aggiorno il localStorage
        riga.remove();
    });

    cellaAzioni.appendChild(bottoneElimina);
    riga.appendChild(cellaAzioni);
    tabellaFeedback.appendChild(riga);


}

for (let i = 0; i < dati.length; i++) {
    creaRiga(dati[i]);
}


function cancellaTutto() {
    dati.splice(0, dati.length);     // svuota l'array
    salvaDati();                  
    tabellaFeedback.innerHTML = "";  
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

    salvaDati(); // al posto di localStorage.setItem(...), stessa cosa ma più corto
    creaRiga(valori);

    // aggiungiCellaAzioni(riga, valori);

    // tabellaFeedback.appendChild(riga);
    messaggio.textContent = "";
    formFeedback.reset();
}