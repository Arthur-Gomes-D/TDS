"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    apresentar() {
        console.log("Olá " + this.nome);
    }
}
let pessoas = [new Pessoa("Arthur")];
pessoas[0].apresentar();
