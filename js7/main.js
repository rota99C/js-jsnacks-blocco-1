//jsnack 7
// stampa le potenze di 2 fino a 1000

for (let i = 0; i < 1000; i++) {
    let potenza = Math.pow(2, i);
    // console.log(potenza);
    document.getElementById("message").innerHTML += potenza + "<br>";
}