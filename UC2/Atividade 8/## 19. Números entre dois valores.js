
const input = require("prompt-sync")();

let initNum = +input("Digite o número inicial: ")
let finalNum = +input("Digite o número final: ")

for (;initNum != (finalNum + 1); initNum++){
    console.log(initNum);
    
}