const btn = document.getElementById("btn")

btn.addEventListener("click", mostraMessaggio)

function mostraMessaggio(){
    alert("Ciao")
    console.log("Hai cliccato") //utile per il debug, console.log serve per scrivere in terminale
}

/*pop-up (in ordine di gravità)
- interruzione
- avviso
- informazione
*/

