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