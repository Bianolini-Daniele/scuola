const form = document.getElementByID("form");
const formFeedback = document.getElementById("formFeedback");
const messaggio = document.getElementById("messaggio");
const tabellaFeedback = document.getElementByID("tabellaFeedback");

formFeedback.addEventListener("submit", gestisciSubmit);

const dati = [];

function gestisciSubmit(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;
    const ora = document.getElementById("ora").value;
    const tipo = document.getElementById("tipo").value;
    const messaggio = document.getElementById("messaggio").value.trim();
    const checkbox = document.getElementById("checkbox").checked;

    if(!nome||!email||!data||!ora||!tipo||!messaggi){
        alert("Compila tutti i campi obbligatori")
        return
    }

    //checkbox ? (è un operatore ternario) va a controllare se la checkbox è stata spuntata o no e, di conseguenza, da al valore "iscrizione" si o no
    const iscrizione = checkbox ? "Si" : "No";


    //per creare le celle e inserire i nuovi dati, serve usare un ciclo
    const riga = document.createElement("tr"); //crea una riga nella tabella

    const dato = {
        nome,
        email,
        data,
        ora,
        tipo,
        messaggio,
        iscrizione,
    }

}