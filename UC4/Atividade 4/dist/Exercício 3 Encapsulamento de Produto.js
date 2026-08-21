"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    nome;
    _preco;
    constructor(nome, preco) {
        this.nome = nome;
        this._preco = preco;
    }
    set preco(novoPreco) {
        if (novoPreco <= 0) {
            throw new Error('preço invalido');
        }
        else {
            this._preco = novoPreco;
        }
    }
    get preco() {
        return this._preco;
    }
}
let produtos = [new Produto("maçã", 100)];
console.log(produtos[0].preco);
produtos[0].preco = 10;
console.log(produtos[0].preco);
produtos[0].preco = -10;
