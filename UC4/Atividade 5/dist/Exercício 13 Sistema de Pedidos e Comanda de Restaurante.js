"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemMenu {
    _codigo;
    _nome;
    _precoBase;
    constructor(codigo, nome, precoBase) {
        this._codigo = codigo;
        this._nome = nome;
        this._precoBase = precoBase;
    }
    get nome() {
        return this._nome;
    }
    getPreco() {
        return this._precoBase;
    }
}
class PratoPrincipal extends ItemMenu {
    constructor(codigo, nome, precoBase) {
        super(codigo, nome, precoBase);
    }
    getPreco() {
        return this._precoBase;
    }
}
class Bebida extends ItemMenu {
    _taxaRefrigeracao;
    constructor(codigo, nome, precoBase, taxa) {
        super(codigo, nome, precoBase);
        this._taxaRefrigeracao = taxa;
    }
    getPreco() {
        return this._precoBase + this._taxaRefrigeracao;
    }
}
class Comanda {
    _numeroMesa;
    _itens;
    constructor(numeroMesa) {
        this._numeroMesa = numeroMesa;
        this._itens = [];
    }
    adicionarItem(item) {
        this._itens.push(item);
        console.log("Item adicionado a os pedidos");
    }
    calcularTotal() {
        return this._itens.reduce((accumulator, currentValue) => accumulator + currentValue.getPreco(), 0);
    }
    gerarExtrato() {
        console.log("+================");
        console.log(`| Mesa: ${this._numeroMesa}`);
        console.log("+================");
        for (const item of this._itens) {
            console.log(`| ${item.nome}   R$${item.getPreco()}`);
        }
        console.log("+================");
        console.log(`| Total: R$${this.calcularTotal()}`);
        console.log("+================");
    }
}
let pratos = [new PratoPrincipal(1, "Bife", 52), new PratoPrincipal(2, "Bakso", 62)];
let bebidas = [new Bebida(1, "Água", 10, 0), new Bebida(2, "Refri", 18.99, 5)];
let coman = new Comanda(1);
coman.adicionarItem(pratos[0]);
coman.adicionarItem(pratos[1]);
coman.adicionarItem(bebidas[0]);
coman.gerarExtrato();
