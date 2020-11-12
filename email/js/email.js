// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var emailClient = prompt("Inserisca la sua email:")
console.log(emailClient);

var emailAvailable = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com", "utente4@gmail.com", "utente5@gmail.com", "utente6@gmail.com"];

var result = false;
for (var i = 0; i < emailAvailable.length; i++) {
  if (emailClient == emailAvailable[i]) {
    result = true;
  }
}

if (result == true) {
  document.getElementById("email").innerHTML = "La mail è disponibile";
} else {
  document.getElementById("email").innerHTML = "La mail non è disponibile";
}
