const prompt = require("prompt-sync")();
let tentativas = 0 
let = senha = null 
while (senha != "abre123"){
    senha = prompt("escreva senha: ")
    tentativas += 1
    console.log("Senha incorreta, tente de novo.");
}
console.log("Porta aberta!");
console.log(`você tentou ${tentativas} vez(es) `);
