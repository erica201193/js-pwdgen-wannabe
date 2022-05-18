alert(`Benvenuto nel generatore di password!`)

const nomeUtente = prompt ("Come ti chiami?")

const cognomeUtente = prompt ("Qual'è il tuo cognome?")

const colorepreferitoUtente = prompt ("Qual'è il tuo colore preferito?")


const spanDatiUtente = document.getElementById("dati-utente")

spanDatiUtente.innerHTML = (`<strong class="text-danger">${nomeUtente}${cognomeUtente}${colorepreferitoUtente}22</strong>`);