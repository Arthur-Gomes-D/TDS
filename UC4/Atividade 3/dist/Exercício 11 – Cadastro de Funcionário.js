"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    mostrarFuncionario() {
        console.log("┌────────────────────────┐");
        console.log("│ Funcionario            │");
        console.log("│────────────────────────│");
        console.log(`│ Nome: ${this.nome}`);
        console.log(`│ Cargo: ${this.cargo}`);
        console.log(`│ Salario: ${this.salario}`);
        console.log("└────────────────────────┘");
    }
}
let funcionarios = [new Funcionario("Cunobelinos Nichita", "ocairador", 2000), new Funcionario("Minako Vojta", "guintomeiro", 2501), new Funcionario("Torgunn Polina", "patirador", 5)];
funcionarios[0].mostrarFuncionario();
funcionarios[1].mostrarFuncionario();
funcionarios[2].mostrarFuncionario();
