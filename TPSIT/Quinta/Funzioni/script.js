const formAcquisto = document.getElementById("formAcquisto");
const risultato = document.getElementById("risultato");

//gestisco il submit

formAcquisto.addEventListener("submit", gestisciSubmit);

function gestisciSubmit(event) {
    event.preventDefault()

    const prodotto = document.getElementById("prodotto").value.trim();
    const prezzo = Number(document.getElementById("prezzo").value);
    const quantita =  Number(document.getElementById("quantita").value);

}

function calcolaSubtotale(prezzo, quantita){
    return prezzo*quantita;
}

function calcolaTotale(subtotale, sconto){
    return subtotale-sconto;;
}

function mostraRisultato (prodotto, subtotale, sconto, totale){
    risultato.textContent = ``
}