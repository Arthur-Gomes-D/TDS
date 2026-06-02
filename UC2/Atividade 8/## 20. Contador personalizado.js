
const input = require("prompt-sync")();

let initNum = +input("Digite o número inicial: ")
let finalNum = +input("Digite o número final: ")
let span = +input("Digite o intervalo: ")

for (; initNum <= finalNum; initNum += span){
    console.log(initNum);
    
}