const formAcquisto = document.getElementById("formAcquisto");
const risultato = document.getElementById("risultato");

// Permetto i decimali nel prezzo senza toccare l'HTML
document.getElementById("prezzo").step = "0.01";

// Creo la tabella e il totale complessivo via JS
const tabella = document.createElement("table");
tabella.border = "1";
tabella.innerHTML = `
    <thead>
        <tr>
            <th>Prodotto</th>
            <th>Prezzo</th>
            <th>Quantità</th>
            <th>Subtotale</th>
            <th>Sconto</th>
            <th>Totale</th>
            <th>Azioni</th>
        </tr>
    </thead>
    <tbody></tbody>
`;
const corpoTabella = tabella.querySelector("tbody");

const paragrafoTotale = document.createElement("p");
paragrafoTotale.textContent = "Totale complessivo: 0.00 euro";

// Pulsante per eliminare tutto
const btnSvuota = document.createElement("button");
btnSvuota.type = "button";
btnSvuota.textContent = "Svuota tutto";
btnSvuota.addEventListener("click", svuotaTutto);

risultato.after(tabella, paragrafoTotale, btnSvuota);

// Carico l'array dal localStorage, ignorando dati vecchi o rovinati
function caricaDati() {
    try {
        const dati = JSON.parse(localStorage.getItem("prodotti"));
        if (!Array.isArray(dati)) return [];
        return dati.filter(function (p) {
            return p && typeof p.totale === "number";
        });
    } catch (e) {
        return [];
    }
}

const prodotti = caricaDati();

formAcquisto.addEventListener("submit", gestisciSubmit);

// Al caricamento mostro i dati già salvati
aggiornaTabella();

function gestisciSubmit(event) {
    event.preventDefault();

    const prodotto = document.getElementById("prodotto").value.trim();
    const prezzo = Number(document.getElementById("prezzo").value);
    const quantita = Number(document.getElementById("quantita").value);

    // Controllo minimo sui dati
    if (prodotto === "" || prezzo <= 0 || quantita <= 0) {
        risultato.textContent = "Inserisci prodotto, prezzo e quantità validi.";
        return;
    }

    // 1. calcoli con le funzioni
    const subtotale = calcolaSubtotale(prezzo, quantita);
    const sconto = calcolaSconto(subtotale);
    const totale = calcolaTotale(subtotale, sconto);

    // 2. oggetto con tutti i dati
    const nuovoProdotto = { prodotto, prezzo, quantita, subtotale, sconto, totale };

    // 3. aggiungo all'array
    prodotti.push(nuovoProdotto);

    // 6. salvo nel localStorage
    salvaDati();

    // 4 + 5. tabella e totale complessivo
    aggiornaTabella();

    mostraRisultato(prodotto, subtotale, sconto, totale);

    // 7. svuoto il form
    formAcquisto.reset();
}

function salvaDati() {
    localStorage.setItem("prodotti", JSON.stringify(prodotti));
}

function calcolaSubtotale(prezzo, quantita) {
    return Math.round(prezzo * quantita * 100) / 100;
}

function calcolaSconto(subtotale) {
    let sconto = 0;
    if (subtotale >= 100) {
        sconto = Math.round(subtotale * 0.10 * 100) / 100;
    }
    return sconto;
}

function calcolaTotale(subtotale, sconto) {
    return Math.round((subtotale - sconto) * 100) / 100;
}

// ELIMINA UNA SINGOLA RIGA
function eliminaProdotto(indice) {
    prodotti.splice(indice, 1);   // tolgo 1 elemento in posizione "indice"
    salvaDati();
    aggiornaTabella();
    risultato.textContent = "";
}

// ELIMINA TUTTO (array + localStorage)
function svuotaTutto() {
    if (prodotti.length === 0) return;
    if (!confirm("Vuoi eliminare tutti i prodotti?")) return;

    prodotti.length = 0;                  // svuoto l'array (è const, quindi non lo riassegno)
    localStorage.removeItem("prodotti");  // tolgo la chiave dal localStorage
    aggiornaTabella();
    risultato.textContent = "";
}

// 4. ridisegno la tabella a partire dall'array
function aggiornaTabella() {
    corpoTabella.textContent = "";

    prodotti.forEach(function (p, indice) {
        const riga = document.createElement("tr");
        const valori = [p.prodotto, p.prezzo, p.quantita, p.subtotale, p.sconto, p.totale];

        valori.forEach(function (valore) {
            const cella = document.createElement("td");
            cella.textContent = valore;
            riga.appendChild(cella);
        });

        // cella con il pulsante Elimina
        const cellaAzioni = document.createElement("td");
        const btnElimina = document.createElement("button");
        btnElimina.type = "button";
        btnElimina.textContent = "Elimina";
        btnElimina.addEventListener("click", function () {
            eliminaProdotto(indice);
        });
        cellaAzioni.appendChild(btnElimina);
        riga.appendChild(cellaAzioni);

        corpoTabella.appendChild(riga);
    });

    aggiornaTotaleComplessivo();
}

// 5. somma di tutti i totali
function aggiornaTotaleComplessivo() {
    let somma = 0;
    prodotti.forEach(function (p) {
        somma += p.totale;
    });
    paragrafoTotale.textContent = `Totale complessivo: ${somma.toFixed(2)} euro`;
}

function mostraRisultato(prodotto, subtotale, sconto, totale) {
    risultato.textContent = `${prodotto} - Subtotale: ${subtotale} - ` +
        `Sconto: ${sconto} euro - Totale: ${totale} euro`;
}