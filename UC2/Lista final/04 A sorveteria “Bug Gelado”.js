const prompt = require("prompt-sync")();

let sabor = +prompt("Qual sabor? ")

switch (sabor) {
    case 1:
        console.log("Chocolate");
        break;
    case 2:
        console.log("Morango");
        break;
    case 3:
        console.log("Creme");
        break;
    case 4:
        console.log("Flocos");
        break;
    case 5:
        console.log("Limão");
        break;
    default:
        console.log("Sabor indisponível");
        
        break;
}