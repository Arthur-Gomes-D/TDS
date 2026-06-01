

const input = require("prompt-sync")();

let num = NaN
let positives = 0

for (i = 1; i != 7; i++){
    num = +input(`Digite o ${i}º número: `)
    if (num > 0) {
        positives += 1
    }
}
console.log("Quantidade de positivos: " + positives);

