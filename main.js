/*
//jsnack1

//L’utente inserisce due numeri in successione, con due prompt.
const userNumber1 = parseInt(prompt("metti il tuo numero"))
const userNumber2 = parseInt(prompt("metti un altro numero"))

//Il software stampa il maggiore.
if (userNumber1 == userNumber2) {
    document.getElementById("message").innerHTML = "I numeri sono uguali";

}

else if (userNumber2 > userNumber1) {
    document.getElementById("message").innerHTML = "il numero maggiore è" + userNumber2;
}

else {
    document.getElementById("message").innerHTML = "il numero vincente è" + userNumber1;

}
*/


/*

//jsnack2
//L’utente inserisce due parole in successione, con due prompt.
const parolaUno = prompt("scrivi una parola")
const parolaDue = prompt("scrivi un altra parola")
//Il software stampa prima la parola più corta, poi la parola più lunga.
console.log(parolaUno.length);

if (parolaUno.length == parolaDue.length) {
    document.getElementById("message").innerHTML = "le lunghezza delle parole sono uguali"
}

else if (parolaUno.length < parolaDue.length) {
    document.getElementById("message").innerHTML = "la parola più corta è" + parolaUno
    document.getElementById("message").innerHTML += "la parola più lunga è" + parolaDue
}

else {
    document.getElementById("message").innerHTML = "la parola più corta è" + parolaDue
    document.getElementById("message").innerHTML += "la parola più lunga è" + parolaUno
}

*/



/*


//jsnack3 
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
let Risultato = 0
for (let i = 0; i < 10; i++) {
    let Usernumber = parseInt(prompt("inserisci un numero"));
    console.log(Usernumber);
    Risultato += Usernumber;
}
//Il programma stampa la somma di tutti i numeri inseriti.
document.getElementById("message").innerHTML = "la somma dei numeri che hai inserito è" + Risultato

*/


//jsnack4 
/* In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. */

/*

let invitati = ["Giovanni", "Giacomo", "Drew", "Irene", "Paola"]

let User = prompt("mi dici il tuo nome?")

let verifica = false


for (let i = 0; i < invitati.length; i++) {
    const element = invitati[i];

    if (User == element) {
        verifica = true;

    }
}

if (verifica) {
    document.getElementById("message").innerHTML = "ti aspetto alla mia festa di compleanno a Miami"
}

else {
    document.getElementById("message").innerHTML = "non sei stato invitato alla mia festa!!!"
}


*/



//jsnack
/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */


let array = [];
for (let i = 0; i < 6; i++) {
    const element = parseInt(prompt("inserisci un numero"));
    console.log(element);

    if (element == 1 | element % 2 + 1) {
        array.push(element);
    }
}

console.log(array);



/* for (let i = 0; i < 10; i++) {
    let Usernumber = parseInt(prompt("inserisci un numero"));
    console.log(Usernumber);
    Risultato += Usernumber;
 */
