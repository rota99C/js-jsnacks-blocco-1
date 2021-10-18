//jsnack 8

//Chiedi all'utente un numero di 4 cifre
// Calcola la somma di tutte le cifre che compongono il numero

let userNumber = String(prompt("Inserisci un numero di quattro cifre"))
// console.log(userNumber);
let numeroCifre = userNumber.length
//console.log(numeroCifre);
let userCifre = [...userNumber]
//console.log(userCifre);
let Risultato = 0

if (numeroCifre == 4) {

    let somma = userCifre[0] + userCifre[1] + userCifre[2] + userCifre[3];
    console.log(somma);

}