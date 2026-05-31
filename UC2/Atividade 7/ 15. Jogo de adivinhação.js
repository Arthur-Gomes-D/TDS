
const prompt = require("prompt-sync")();

const numeroSecreto = 7
let num = NaN
let running = true

while (running) {
    num = +prompt("Digite um número entre 1 e 10: ")
    if (num == numeroSecreto) {

        console.log("Parabéns! Você acertou.");
        running = false
    }else{
        console.log("Errou. Tente novamente.");
        
    }
}