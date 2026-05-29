
const input = require("prompt-sync")();

let valor_original = +input("Valor do produto: ")

switch (true) {
    case (valor_original >= 100 && valor_original < 200):
        desconto = (10 / 100) * valor_original
        valor_final = valor_original - desconto
        console.log("desconto: 10%");
        console.log(`Valor discontado: ${desconto}`);
        console.log(`Valor original: ${valor_original}`);
        console.log(`Valor final: ${valor_final}`);
        break;
    case (valor_original >= 200):
        desconto = (20 / 100) * valor_original
        valor_final = valor_original - desconto
        console.log("desconto: 20%");
        console.log(`Valor discontado: ${desconto}`);
        console.log(`Valor original: ${valor_original}`);
        console.log(`Valor final: ${valor_final}`);
        break;

    default:
        desconto = 0
        valor_final = valor_original - desconto
        console.log("desconto: 0%");
        console.log(`Valor discontado: ${desconto}`);
        console.log(`Valor original: ${valor_original}`);
        console.log(`Valor final: ${valor_final}`);
        break;
}

