

const input = require("prompt-sync")();

const temp = +input("Temperatura: ")

switch (true) {
    case (temp < 15):
        console.log("frio");
        break;
    case (temp >= 15 && temp < 25):
        console.log("Agradável");
        break;
    case (temp >= 25):
        console.log("Quente");
        break;
    default:
        console.log("Erro");
        
}

