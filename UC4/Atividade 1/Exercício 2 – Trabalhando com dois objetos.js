class Aluno {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    mostrarDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
    }
}

let alunos = [new Aluno("Carlos", 18)]

alunos[0].mostrarDados()