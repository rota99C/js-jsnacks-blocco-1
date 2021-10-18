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