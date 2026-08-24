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
const benson = new Gerente("benson", 1500, 2);
try {
    benson.salario = -1;
}
catch (error) {
    console.log("negativo");
}
console.log(benson.calcularSalarioFinal());
