class Aluno {
    nome:string
    idade:number
    constructor(nome:string, idade:number){
        this.nome = nome
        this.idade = idade
    }

    mostrarDados(){
        console.log("┌<Aluno(a)>─────────────────────────┐");
        console.log("│ Nome: ", this.nome);
        console.log("│ Idade: ", this.idade);
        console.log("└───────────────────────────────────┘");
        
    }
}

let alunos = [new Aluno("Lara Hubert", 17), new Aluno("Constantino Rosana", 19)]

alunos[0].mostrarDados()
alunos[1].mostrarDados()