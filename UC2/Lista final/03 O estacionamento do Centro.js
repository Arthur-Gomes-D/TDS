const prompt = require("prompt-sync")();

let horas_estacionado = +prompt("quantas horas você ficou estacionado: ")
let pagar = 0


if (horas_estacionado >= 8) {
    pagar = 30
} else {
    for (let i = 0; i <= (horas_estacionado-1); i++) {
        if (i == 0) {
            pagar += 8
        } else {
            pagar += 3
        }
    }
}
console.log(`você vai ter que pagar ${pagar}`);
