

const input = require("prompt-sync")();

let peso = +input("Peso: ")
let altura = +input("Altura: ")

let imc = (peso)/(altura**2)

switch (true) {
    case (imc < 18.5):
        console.log("Baixo peso");
        break;
    case (imc >= 18.5 && imc <= 24.99):
        console.log("normal");
        break;
    case (imc >= 25 && imc <= 29.99):
        console.log("normal");
        break;
    case (imc >= 30):
        console.log("Obesidade");
        break;
    default:
        console.log("erro");
        break;
}

