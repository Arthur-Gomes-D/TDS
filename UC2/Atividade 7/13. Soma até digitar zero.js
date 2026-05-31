
const prompt = require("prompt-sync")();

let num = NaN
let totalSum = 0

do {
    num = +prompt("Digite um número:")
    totalSum = totalSum + num
} while (num != 0);
console.log(`Soma total: ${totalSum}`);
