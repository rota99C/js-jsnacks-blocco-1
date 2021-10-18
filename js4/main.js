//jsnack4 
/* In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. */



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