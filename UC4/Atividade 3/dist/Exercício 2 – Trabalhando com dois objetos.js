"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDados() {
        console.log("┌<Aluno(a)>─────────────────────────┐");
        console.log("│ Nome: ", this.nome);
        console.log("│ Idade: ", this.idade);
        console.log("└───────────────────────────────────┘");
    }
}
let alunos = [new Aluno("Lara Hubert", 17), new Aluno("Constantino Rosana", 19)];
alunos[0].mostrarDados();
alunos[1].mostrarDados();
