

const prompt = require("prompt-sync")();

const preco = Number(prompt("Preço do produto: "))
const quantidade = parseInt(prompt("Quantidade do produto: "))

console.log(`${quantidade} produto(s) de ${preco} são ${preco * quantidade}`);
