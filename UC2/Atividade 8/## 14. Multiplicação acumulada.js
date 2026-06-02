
const prompt = require("prompt-sync")();

let running = true
let num = null
let total = 1

while (running) {
    num = +prompt("Digite um número: ")
    if (!isNaN(num) && num >= 0) {
        for (let i = 1; i != (num + 1); i++) {
            console.log(i);
            total *= i
            if (i == num) {
                console.log("=");
                console.log(total);
            } else {
                console.log("X");
            }
        }
        running = false
    } else {
        console.log("Número deve ser inteiro e positivo");

    }
}
