const produto = {
    nome: "Vinho",
    preco: 149.99,
    quantidade: 10,
    total() {
        console.log(this.preco * this.quantidade);
    }
}
console.log(produto);
produto.total();
