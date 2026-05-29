
const input = require("prompt-sync")();

let i = +input("Escreva um número: ")

while (i != -1) {
    console.log(i);
    i--
}