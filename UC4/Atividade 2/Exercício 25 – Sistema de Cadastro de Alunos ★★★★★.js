class Aluno {
    constructor(nome, nota1, nota2) {
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
    }
    calcularMedia() {
        return (this.nota1 + this.nota2) / 2
    }
}
class Escola {
    constructor() {
        this.alunos = []
    }
    adicionarAluno(nome, nota1, nota2) {
        this.alunos.push(new Aluno(nome, nota1, nota2))
        console.log("Aluno adicionado");
    }
    listarAlunos() {
        for (let aluno of this.alunos) {
            console.log("┌<Aluno>─────────────────────────────┐");
            console.log(`│ Nome: ${aluno.nome}`);
            console.log(`│ Media: ${aluno.calcularMedia()}`);
            if (aluno.calcularMedia() >= 7) {
                console.log("│ Situação: Aprovado");

            } else {
                console.log("│ Situação: Reprovado");
            }
            console.log("└────────────────────────────────────┘");
        }

    }
    mostrarAprovados() {
        for (let aluno of this.alunos) {
            if (aluno.calcularMedia() >= 7) {
                console.log("┌<Aluno Aprovado>────────────────────┐");
                console.log(`│ Nome: ${aluno.nome}`);
                console.log(`│ Media: ${aluno.calcularMedia()}`);
                console.log("└────────────────────────────────────┘");
            }
        }
    }
    mostrarReprovados() {
        for (let aluno of this.alunos) {
            if (aluno.calcularMedia() < 7) {
                console.log("┌<Aluno Reporvado>───────────────────┐");
                console.log(`│ Nome: ${aluno.nome}`);
                console.log(`│ Media: ${aluno.calcularMedia()}`);
                console.log("└────────────────────────────────────┘");
            }
        }
    }
}
let escola123 = new Escola()

escola123.adicionarAluno("João Testa", 6.3, 7.3)
escola123.adicionarAluno("Simplicius Braian", 8.7, 7.3)
escola123.adicionarAluno("Radoš Vivi", 7.3, 9.3)
escola123.adicionarAluno("Brunhild Mattea", 3.1, 9.3)
escola123.adicionarAluno("Bryson Bakyt", 7.1, 10.0)
escola123.adicionarAluno("Tamsen Ikram", 9.8, 8.0)

escola123.mostrarAprovados()
escola123.mostrarReprovados()
escola123.listarAlunos()