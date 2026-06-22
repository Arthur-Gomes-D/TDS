const prompt = require("prompt-sync")();

let pedido = 0
let rodando = true
while (rodando) {
    pedido = +prompt("Qual você quer?")

    if (pedido >= 1 && pedido <= 3) {
        // vezes 3 ou algo assim tipo 1,50
    } else{
        console.log("Pedido invalio");
    }
}