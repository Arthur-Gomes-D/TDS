

const prompt = require("prompt-sync")();
let running = true

let choice = 0

let num1 = 0
let num2 = 0

do {
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Sair");
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=");
    choice = +prompt("operação: ")
    switch (choice) {
        case 1:
            num1 = +prompt("Escreva um número: ")
            num2 = +prompt("Escreva outro número: ")
            console.log("+++++++++++++++++++++++++++++++++++")
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            console.log("+++++++++++++++++++++++++++++++++++")
            break;
        case 2:
            
            num1 = +prompt("Escreva um número: ")
            num2 = +prompt("Escreva outro número: ")

            console.log("-----------------------------------")
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            console.log("-----------------------------------")
            break;
        case 3:
            console.log("Saindo...");
            running = false
            break;
        
        default:
            console.log("Verifique valor colocado");
            break;
    }
} while (running);