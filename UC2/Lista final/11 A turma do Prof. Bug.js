let notas = 0
let aprovados = []
let turma = [
{ nome: "Ana", nota: 8.5 },
{ nome: "Bruno", nota: 5.0 },
{ nome: "Carla", nota: 9.2 },
{ nome: "Diego", nota: 6.0 },
{ nome: "Elaine", nota: 7.8 }
];
for (aluno in turma){
    console.log("nome:" ,turma[aluno].nome);
    console.log("nota:" ,turma[aluno].nota);
    notas += turma[aluno].nota
    if (turma[aluno].nota >= 7) {
        aprovados.push(turma[aluno])
    }
}

console.log("media:", notas/turma.length);
console.log("aprovados");
console.log(aprovados);
