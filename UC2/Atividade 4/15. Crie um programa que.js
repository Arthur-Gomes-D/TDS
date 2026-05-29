


const input = require("prompt-sync")()

const nome_do_produto = input("Nome do produto: ")
const preco_do_produto = Number(input("preço do produto: "))
const disconto = Number(input("deconto: "))

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("Nome: " + nome_do_produto);
console.log("Preço: " + preco_do_produto);
console.log("disconto: " + disconto);
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("Preço final: " + (preco_do_produto - disconto ));

