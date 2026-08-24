"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    _nome;
    _salarioBase;
    constructor(nome, salarioBase) {
        this._nome = nome;
        this._salarioBase = salarioBase;
    }
    get salario() {
        return this._salarioBase;
    }
    set salario(valor) {
        if (valor <= 0) {
            throw new Error("Valor invalido");
        }
        else {
            this._salarioBase = this.salario;
        }
    }
    calcularSalarioFinal() {
        return this._salarioBase;
    }
}
class Gerente extends Funcionario {
    _bonusAdicional;
    constructor(nome, salarioBase, bonusAdicional) {
        super(nome, salarioBase);
        this._bonusAdicional = bonusAdicional;
    }
    calcularSalarioFinal() {
        return super.calcularSalarioFinal() + this._bonusAdicional;
    }
}
class Diretor extends Funcionario {
    _participacaoLucros;
    constructor(nome, salarioBase, participacaoLucros) {
        super(nome, salarioBase);
        this._participacaoLucros = participacaoLucros;
    }
    calcularSalarioFinal() {
        return super.calcularSalarioFinal() + this._participacaoLucros;
    }
}
class Empresa {
    funcionarios;
    constructor() {
        this.funcionarios = [];
    }
    adicionarFuncionario(f) {
        this.funcionarios.push(f);
        console.log("Funcionario adicionado");
    }
    calcularFolhaTotal() {
        let total = 0;
        for (const funcionario of this.funcionarios) {
            total += funcionario.calcularSalarioFinal();
        }
        return total;
    }
}
const diret = new Diretor("A", 12500, 500);
console.log(diret.calcularSalarioFinal());
let emp = new Empresa();
let funcionarios = [new Funcionario("jdsa", 1321), new Funcionario("jdsa", 2320)];
emp.adicionarFuncionario(funcionarios[0]);
emp.adicionarFuncionario(funcionarios[1]);
emp.adicionarFuncionario(diret);
console.log(emp.calcularFolhaTotal());
