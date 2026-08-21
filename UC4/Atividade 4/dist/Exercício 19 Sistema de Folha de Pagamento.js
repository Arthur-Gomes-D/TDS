"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    _nome;
    _salarioBase;
    _descontos;
    constructor(nome, salarioBase, desconto) {
        this._nome = nome;
        this._salarioBase = salarioBase;
        this._descontos = desconto;
    }
    getSalarioLiquido() {
        return this._salarioBase - this._descontos;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this.nome = novoNome;
    }
    get salario() {
        return this._salarioBase;
    }
    set salario(novo) {
        if (novo <= 0) {
            throw new Error('salario invalido');
        }
        else {
            this._salarioBase = novo;
        }
    }
    set desconto(novo) {
        if (novo <= 0) {
            throw new Error('salario invalido');
        }
        else {
            this._descontos = novo;
        }
    }
    get desconto() {
        return this._descontos;
    }
}
let joaoTesta = new Funcionario("João Testa", 2500, 50);
let joaoTesta1 = new Funcionario("João Testa1", 2800, 50);
let joaoTesta2 = new Funcionario("João Testa2", 3200, 50);
class FolhaPagamento {
    funcionarios;
    constructor() {
        this.funcionarios = [];
    }
    adicionarFuncionarios(funcionario) {
        this.funcionarios.push(funcionario);
    }
    calcularCustoTotal() {
        let total = 0;
        for (const funcionario of this.funcionarios) {
            total += funcionario.getSalarioLiquido();
        }
        return total;
    }
}
let folhaPagamento = new FolhaPagamento();
folhaPagamento.adicionarFuncionarios(joaoTesta);
folhaPagamento.adicionarFuncionarios(joaoTesta1);
folhaPagamento.adicionarFuncionarios(joaoTesta2);
console.log(folhaPagamento.calcularCustoTotal());
