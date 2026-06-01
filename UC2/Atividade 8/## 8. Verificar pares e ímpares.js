

const prompt = require("prompt-sync")();

let num = NaN
let par = 0
let impar = 0


for (let i = 0; i != 10; i++) {
    num = +prompt('Escreva um número: ');
    if (num % 2 == 0) {
        par += 1
    } else {
        impar += 1
    }
}
console.log("Pares: " + par);
console.log("Ímpares: " + impar);
