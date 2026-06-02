

const prompt = require("prompt-sync")();

let running = true
let i = null
let total = 1
let argument = 0
while (running) {
    i = +prompt("Digite um número: ")
    if (!isNaN(i) && i >= 0) {
        argument = i
        for (; i != 0; i--) {
            total *= i
        }
        console.log(`${argument}! = ${total}`);

        running = false
    } else {
        console.log("Número deve ser inteiro e positivo");

    }
}
