// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
var numberPC = Math.floor(Math.random() * 6) + 1;
console.log(numberPC);

var numberUser = Math.floor(Math.random() * 6) + 1;
console.log(numberUser);

if (numberPC > numberUser) {
  console.log("Vince il PC");
  document.getElementById("test").innerHTML = "Ha vinto il PC";
} else if (numberPC == numberUser) {
  console.log("Non ha vinto nessuno, riprovare");
  document.getElementById("test").innerHTML = "Non ha vinto nessuno, riprovare";
} else {
  console.log("Vince l'utente");
  document.getElementById("test").innerHTML = "Ha vinto l'utente";
}
