// chiedo all'utente di inserire un numero N
let userNumber = parseInt(prompt("Inserisci un numero"))
// calcolo il cubo di N
let cubo = userNumber * userNumber * userNumber
// stampo il cubo di N
document.getElementById("message").innerHTML = "il cubo del numero che hai inserito è" + cubo