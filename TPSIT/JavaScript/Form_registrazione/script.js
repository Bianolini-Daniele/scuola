const form = document.getElementById('formUtente')
const tabellaBody = document.getElementById('tabellaFeedback')

let iscrizioni = []

const btnEliminaTutti = document.createElement('button')
btnEliminaTutti.textContent = 'Elimina tutti'
btnEliminaTutti.style.marginTop = '10px'
btnEliminaTutti.style.marginBottom = '10px'
btnEliminaTutti.style.display = 'none'
btnEliminaTutti.style.margin = 'auto'
form.after(btnEliminaTutti)

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value.trim()
    const cognome = document.getElementById('cognome').value.trim()
    const email = document.getElementById('email').value.trim()
    const corso = document.getElementById('corso').value
    const modalita = document.getElementById('modalità').value
    const newsletter = document.getElementById('iscr').checked ? 'Sì' : 'No'

    if (!nome || !cognome || !email || !corso || !modalita) {
        alert('Compila tutti i campi obbligatori!')
        return;
    }

    const nuovaIscrizione = {
        id: Date.now(),
        nome: nome,
        cognome: cognome,
        email: email,
        tipo: corso,
        modalita: modalita,
        newsletter: newsletter
    }

    iscrizioni.push(nuovaIscrizione)
    aggiornaTabella()
    form.reset()
})

function aggiornaTabella() {
    tabellaBody.innerHTML = ''

    if (iscrizioni.length > 0) {
        btnEliminaTutti.style.display = 'block'
    } else {
        btnEliminaTutti.style.display = 'none'
    }

    iscrizioni.forEach((iscrizione) => {
        const riga = document.createElement('tr')
        riga.innerHTML = `<td>${iscrizione.nome}</td>
            <td>${iscrizione.cognome}</td>
            <td>${iscrizione.email}</td>
            <td>${iscrizione.tipo}</td>
            <td>${iscrizione.modalita}</td>
            <td>${iscrizione.newsletter}</td>
            <td><button class="btn-elimina" data-id="${iscrizione.id}">Elimina</button></td>`
        tabellaBody.appendChild(riga)
    })

    const pulsantiElimina = document.querySelectorAll('.btn-elimina')

    pulsantiElimina.forEach(button => {
        button.addEventListener('click', function() {
            const idDaEliminare = Number(this.getAttribute('data-id'))
            eliminaIscrizione(idDaEliminare)
        })
    })
}

function eliminaIscrizione(id) {
    iscrizioni = iscrizioni.filter(iscrizione => iscrizione.id !== id)
    aggiornaTabella()
}

btnEliminaTutti.addEventListener('click', function() {
    if (confirm('Vuoi davvero cancellare tutte le iscrizioni?')) {
        iscrizioni = []
        aggiornaTabella()
    }
})