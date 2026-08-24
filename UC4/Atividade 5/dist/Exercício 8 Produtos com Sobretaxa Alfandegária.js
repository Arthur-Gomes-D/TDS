"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    nome;
    _preco;
    constructor(nome, preco) {
        this.nome = nome;
        this._preco = preco;
    }
    getPrecoFinal() {
        return this._preco;
    }
}
class ProdutoImportado extends Produto {
    _taxaAlfandega;
    constructor(nome, preco, taxaAlfandega) {
        super(nome, preco);
        this._taxaAlfandega = taxaAlfandega;
    }
    getPrecoFinal() {
        const porcentagem = (this._taxaAlfandega / 100) * this._preco;
        return this._preco + porcentagem;
    }
}
let amondega = new Produto("almôndega", 10);
let amondegaSueca = new ProdutoImportado("almôndega sueca", 50, 15);
console.log(`Preço de ${amondega.nome} é R$${amondega.getPrecoFinal()}`);
console.log(`Preço de ${amondegaSueca.nome} é R$${amondegaSueca.getPrecoFinal()}`);
