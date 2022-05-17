alert(`Benvenuto!`)

const nomeUtente = prompt ("Come ti chiami?")

const cognomeUtente = prompt ("Qual'è il tuo cognome?")

const colorepreferitoUtente = prompt ("Qual'è il tuo colore preferito?")


const spanDatiUtente = document.getElementById("dati-utente")

spanDatiUtente.innerHTML = (`${nomeUtente} ${cognomeUtente} ${colorepreferitoUtente} 22`);