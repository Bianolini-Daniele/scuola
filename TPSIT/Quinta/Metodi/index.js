const prodotti = [
 {
   id: 1,
   nome: "Notebook",
   categoria: "Informatica",
   prezzo: 850,
   quantita: 2,
   disponibile: true
 },
 {
   id: 2,
   nome: "Mouse",
   categoria: "Accessori",
   prezzo: 25,
   quantita: 5,
   disponibile: true
 },
 {
   id: 3,
   nome: "Monitor",
   categoria: "Informatica",
   prezzo: 230,
   quantita: 3,
   disponibile: false
 },
 {
   id: 4,
   nome: "Tastiera",
   categoria: "Accessori",
   prezzo: 45,
   quantita: 4,
   disponibile: true
 }
];
 
console.table(prodotti)
 
const calcolaValore = (prodotto) => {
    const valore = prodotto.prezzo*prodotto.quantita
    return valore
}
 
console.log("\nARROW FUNCTION")
 
console.log( "Valore del notebook:", calcolaValore(prodotti[0] ), "Euro" )
 
 
const mostraProdotto = (prodotto, indice) => {
    console.log(
        `${indice+1}, ${prodotto.nome} - ${prodotto.prezzo} euro`
    )
}
 
// FOREACH
console.log("\nMAP");
prodotti.forEach(mostraProdotto)

console.log("\nMAP");

//MAP fa un callback per ogni elemento e costurisce un nuovo array con i valori restituiti

const valoriProdotti = prodotti.map((prodotto) => {
    return prodotto.prezzo*prodotto.quantita;
})


console.log("Valori dei prodotti")
console.log(valoriProdotti)


console.log("\nFILTER");
//FILTER restituisce un nuovo array che contiene solo gli elementi che rispettano una condizione

const prodottiCostosi = prodotti.filter((prodotto) => {
    return prodotto.prezzo>100;
})

console.log("Prodotti più costosi di 100 euro")
console.log(prodottiCostosi)


const prodottiDisponibili = prodotti.filter((prodotto) => {
    return prodotto.disponibile;
})

console.log("Prodotti disponibili")
console.table(prodottiDisponibili)

const prodottoTrovato = prodotti.find((prodotto) => {
    return prodotto.id === 3;
})

console.log("Prodotti con id 3: ")
console.table(prodottoTrovato)


//reduce () elabora tutti gli elementi dell'array e restituisce un unico risultato
const valoreComplessivo = prodotti.reduce((totale, prodotto) => {
    const valoreProdotto = prodotto.prezzo*prodotto.quantita;
    return totale + valoreProdotto;
},0)

console.log("Prodotti Il valore complessivo dei prodotti è ", valoreComplessivo, " euro");


//spread poperator con gli array 
//espande gli elementi di un array, si usa per:
// - copiare array
// - aggiungere elementi
// - unire più array


//copiare prodotti
const copiaProdotti = [...prodotti]
console.table(copiaProdotti)

const nuovoProdotto = {
  id:5,
  nome:"Webcam",
  categoria:"accessori",
  prezzo:60,
  quantita:3,
  disponibile:true
}
const prodottiAggiornati = [...prodotti, nuovoProdotto]
console.table(prodottiAggiornati)
console.log("elementi array originale: ", prodotti.length)
console.log("elementi array nuovo: ", prodottiAggiornati.length)


//unire array

const altriProdotti = [{
  id:6,
  nome:"Stampante",
  categoria:"informatica",
  prezzo:150,
  quantita:1,
  disponibile:true
}]
const catalogoCompleto =[
  ...prodotti, ...altriProdotti
]
console.log("Unione di due array")
console.table(catalogoCompleto)


//sort() ordina gli elementi di un array

//ordinare una copia dell'array per nome in modo crescente
const prodottiOrdinatiPerNome = [...prodotti].sort((a, b) => {
    return a.nome.localeCompare(b.nome);
})
console.log("Prodotti ordinati per nome crescente")
console.table(prodottiOrdinatiPerNome)



//ordinare una copia dell'array per prezzo in modo crescente
const prodottiOrdinatiPerPrezzo = [...prodotti].sort((a, b) => {
    return a.prezzo - b.prezzo;
})
console.log("Prodotti ordinati per prezzo crescente")
console.table(prodottiOrdinatiPerPrezzo)
