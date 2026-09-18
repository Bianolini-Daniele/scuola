const formFeedback = document.getElementById("formFeedback");
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

    //creo un array per contenere tutti i valori da inserire nella tabella
    const valori = [nome,email,data,ora,tipo,messaggio,iscrizione]

    const riga = document.createElement("tr"); //crea una riga nella tabella


    //scorro gli elementi dell'array per inserirli nella tabella

    for(let i=0; i<valori.length;i++){
        const cella=document.createElement("td");
        cella.textContent = valori[i];
8
        //aggiungere la cella alla riga
        riga.appendChild(cella);
    }
    
    const cellaAzioni = document.createElement("td");

    //creo bottone elimina e il testo al suo interno
    const bottoneElimina = document.createElement("button");

    bottoneElimina.textContent("Elimina");


    bottoneElimina.addEventListener("click", function(){
        riga.remove();
    });


    cellaAzioni.appendChild(bottoneElimina);

    riga.appendChild(cellaAzioni);


}