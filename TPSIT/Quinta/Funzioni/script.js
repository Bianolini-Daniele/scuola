const formAcquisto=document.getElementById("formAcquisto")
const risultato=document.getElementById("risultato")

//GESTIONE EVENTO SUBMIT

formAcquisto.addEventListener("submit", gestisciSubmit);


function calcolaSubtotale(prezzo, quantita){
    const subtotale= prezzo*quantita;
    return subtotale;
}

function calcolaSconto(subtotale){
    let sconto=0;
    if(subtotale>=100){
        sconto=subtotale*0.10;
    }
    return sconto;
}

function calcolaTotale(subtotale, sconto){
    const totale= subtotale-sconto;
    return totale;
}


//MOSTRA RISULTATO
//template literal con ALT+96 per inserire i backtick
function mostraRisultato(prodotto,subtotale,sconto,totale){
    risultato.textContent=`${prodotto} - Subtotale: ${subtotale} - ` +
     `Sconto: ${sconto} euro - Totale: ${totale} euro`;
}

function gestisciSubmit(event){
    event.preventDefault()

    //recupero il nome del prodotto
    const prodotto=document.getElementById("prodotto").value.trim();

    //prendiamo il prezzo
    //Number() la converte in numero
    const prezzo= Number(document.getElementById("prezzo").value);
    
    //prendiamo la quantita
    const quantita= Number(document.getElementById("quantita").value);

    const subtotale=calcolaSubtotale(prezzo,quantita);

    const sconto=calcolaSconto(subtotale);

    const totale=calcolaTotale(subtotale,sconto);

    mostraRisultato(prodotto,subtotale,sconto,totale)


}