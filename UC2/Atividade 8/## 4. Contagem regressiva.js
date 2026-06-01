
const prompt = require("prompt-sync")();

let rodando = true
let i = NaN

while (rodando) {
    i = +prompt("Escreva um número: ")
    if (!isNaN(i)) {
        i = i + 1
        for (i != 0; i--;){

            console.log(i);
        }
        rodando = false
    }else{
        console.log("Esse número não é valido!");
    }
}