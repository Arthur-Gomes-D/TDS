
const prompt = require("prompt-sync")();

let running = true
let num = null
let sum = 0

while (running) {
    num = +prompt("Digite um número: ")
    if (!isNaN(num) && num >= 0) {
        for (let i = 1; i != (num + 1); i++) {
            console.log(i);
            sum += i
            if (i == num) {
                console.log("=");
                console.log(sum);
            } else {
                console.log("+");
            }
        }
        running = false
    } else {
        console.log("Número deve ser inteiro e positivo");

    }
}
