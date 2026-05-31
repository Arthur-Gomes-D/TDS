
const prompt = require("prompt-sync")();

let num = NaN

do {
    num = +prompt("Digite um número positivo: ")
} while (num < 0);