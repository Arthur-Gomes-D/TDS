
const prompt = require("prompt-sync")();
let nomes = []
let temp = ""
for (let i = 0; i < 3; i++){
    temp = prompt("Digite um nome: ")
    nomes.push(temp)
}
console.log(nomes);
