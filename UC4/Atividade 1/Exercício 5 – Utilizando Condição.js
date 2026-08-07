class Produto {
    constructor(nome, quantidade) {
        this.nome = nome
        this.quantidade = quantidade
    }

    verificarEstoque(){
        if (this.quantidade > 0) {
            return `produto ${this.nome} disponível`
        } else {
            return `produto ${this.nome} indisponível`
        }
    }
}

let produtos = [new Produto("Sabonete")]

console.log(produtos[0].verificarEstoque());