const prompt = require("prompt-sync")();

let numeros = []
let temp = NaN
for(let i = 0; i < 5; i++){
    temp = Number(prompt("Digite um número: "))
    numeros.push(temp)
}
console.log(`Array completo: ${numeros}`);
console.log(`Quantidade de números digitados: ${numeros.length}`);
