"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
    verificarEstoque() {
        if (this.quantidade > 0) {
            console.log("Produto disponível");
        }
        else {
            console.log("Produto indisponível");
        }
    }
}
let produtos = [new Produto("Maçã", 5), new Produto("Limão", 0)];
produtos[0].verificarEstoque();
produtos[1].verificarEstoque();
