//jsnack 9

let Risultato = 0
// generare 10 numeri

for (let i = 0; i < 10; i++) {
    const numberRandom = Math.floor(Math.random() * 100);
    console.log(numberRandom);
    Risultato += numberRandom;
}

// calcolarne la somma
console.log(Risultato);

// calcolarne la media
let media = Risultato / 10
console.log(media);