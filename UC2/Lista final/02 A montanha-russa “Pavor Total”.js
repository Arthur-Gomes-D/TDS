const prompt = require("prompt-sync")();

let altura = +prompt("Escreva sua altura: ")
let idade = +prompt("Escreva sua idade: ")

if (altura >= 1.40 && idade >= 12) {
    console.log("pode entrar");
}else if (altura >= 1.40 && idade < 12) {
    console.log("só pode entrar com responsavel");
    
}else{
    console.log("não pode entrar");
    
}