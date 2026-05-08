const formUtente = document.getElementById("formUtente")
const messaggio = document.getElementById("messaggio")

formUtente.addEventListener("submit", gestisciSubmit)

function gestisciSubmit(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim() //trim toglie gli spazi
    const cognome = document.getElementById("cognome").value.trim()
    const data = document.getElementById("data").value.trim()

    if(!nome || !cognome || !data){
        alert("Compila tutti i campi")
    }

    //` si scrive ALT + 96 (tastierino con blocnum spento)

    if(nome && cognome && data){
        messaggio.textContent = `Hai inserito ${nome} ${cognome} ${data}`//permette di leggere on modificare il testo del messaggio
    }
}
    