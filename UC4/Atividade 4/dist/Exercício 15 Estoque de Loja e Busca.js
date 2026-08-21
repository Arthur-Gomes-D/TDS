"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estoque {
    produtos;
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(id, nome, qtd) {
        let idRepetido = false;
        if (this.produtos.find((produto) => produto.id == id)) {
            idRepetido = true;
            console.log("já existe um produto com esse id");
        }
        if (!idRepetido) {
            this.produtos.push({ id: id, nome: nome, qtd: qtd });
        }
    }
    atualizarQuantidade(id, novoQtd) {
        for (const produto of this.produtos) {
            if (produto.id == id) {
                produto.qtd = novoQtd;
                console.log(`quantidade de produto de ${id} foi atualizado para ${novoQtd}`);
            }
        }
    }
}
let meuEstoque = new Estoque;
meuEstoque.adicionarProduto(1, "maçã", 5);
meuEstoque.adicionarProduto(1, "maçã", 5);
meuEstoque.atualizarQuantidade(1, 50);
