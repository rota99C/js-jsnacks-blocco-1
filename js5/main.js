//jsnack
/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

let array = [];
for (let i = 0; i < 6; i++) {
    const element = parseInt(prompt("inserisci un numero"));
    console.log(element);

    if (element % 2 != 0) {
        array.push(element);
    }
}

console.log(array);