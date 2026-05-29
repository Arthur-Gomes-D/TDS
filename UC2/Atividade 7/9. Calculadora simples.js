
const input = require("prompt-sync")();

let num1 = 0
let num2 = 0

let operador = ''

let running = true


while (running) {
    num1 = +input("Digite o primeiro número: ")
    num2 = +input("Digite o segundo número: ")
    operador = input("Digite a operação: ")

    switch (operador) {
        case "+":
            console.log(`Resultado: ${num1 + num2}`);
            running = false
            break;
        case "-":
            console.log(`Resultado: ${num1 - num2}`);
            running = false
            break;
        case "*":
            console.log(`Resultado: ${num1 * num2}`);
            running = false
            break;
        case "/":
            console.log(`Resultado: ${num1 / num2}`);
            running = false
            break;
    
        default:
            console.log("Operador não encontrado");
            
            break;
    }
}