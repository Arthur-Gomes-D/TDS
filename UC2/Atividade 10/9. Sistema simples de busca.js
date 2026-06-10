const prompt = require("prompt-sync")();

let alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

let nome = prompt("Escreva um nome de aluno: ")

if (!alunos.includes(nome)) {
    console.log(`Aluno(a) ${nome} não encontrado`);
    
}else{
    console.log("Aluno(a) encontrado");
    
}