//ESERCIZIO 6
const eventiOrdinati = [...eventi].sort((a, b) => {
    return a.costo - b.costo
})
console.table(eventiOrdinati)
console.table(eventi)

const salvaEventi = (lista) => {
    localStorage.setItem("eventiScolastici", JSON.stringify(lista))
}

const caricaEventi = () => {
    const dati = localStorage.getItem("eventiScolastici")
    if (dati === null) {
        return [...eventi]
    }
    return JSON.parse(dati)
}

salvaEventi(eventiOrdinati)
console.table(caricaEventi())