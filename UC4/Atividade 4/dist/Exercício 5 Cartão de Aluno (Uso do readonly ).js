"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartaoEstudante {
    matricula;
    _nome;
    _saldoAlimentacao;
    constructor(matricula, nome, saldoAlimentacao) {
        this.matricula = matricula;
        this._nome = nome;
        this._saldoAlimentacao = saldoAlimentacao;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get nome() {
        return this._nome;
    }
    adicionarSaldo(valor) {
        this._saldoAlimentacao += valor;
    }
}
const estudante = new CartaoEstudante("dka43fsHFSUN", "Nome", 100);
console.log(estudante.matricula);
console.log(estudante.nome);
estudante.nome = "nome novo";
console.log(estudante.nome);
