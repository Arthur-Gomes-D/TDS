const prompt = require("prompt-sync")();
let produtos = ["mouse", "teclado", "monitor", "fone"];

let produto = prompt("Escreva o nome de um produto: ");

if (produtos.indexOf(produto) == -1) {
    console.log("Produto não encontrado");
    
}else{
    console.log(`Produto encontrado na posição ${produtos.indexOf(produto)}`);
    
}