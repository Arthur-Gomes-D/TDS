let total = 0
let dinheiro = 100 
let produtos = [
    {
        nome: "X-salada",
        preco: 18
    },
    {
        nome: "refrigerante",
        preco: 6.50
    }
]

total += (produtos[0].preco * 2) + (produtos[1].preco * 3)
console.log("Total do pedido: R$", {total});
console.log("Troco: R$",dinheiro-total);
