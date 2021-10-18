//jsnack1

/*L’utente inserisce due numeri in successione, con due prompt.*/
const userNumber1 = prompt("metti il tuo numero")
const userNumber2 = prompt("metti un altro numero")

//Il software stampa il maggiore.
if (userNumber1 == userNumber2) {
    document.getElementById("message").innerHTML = "il numero maggiore è";

}

else if (userNumber2 > userNumber1) {
    document.getElementById("message").innerHTML = "il numero maggiore è" + ${ userNumber2 };
}

else {
    document.getElementById("message").innerHTML = "il numero vincente è";

}
