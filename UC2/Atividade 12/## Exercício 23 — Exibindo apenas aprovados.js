let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carla", nota: 9 }
];

function mostrarAprovados(alunos) {
    for (let i = 0; i <= (alunos.length - 1); i++) {
        if (alunos[i].nota >= 7) {
            console.log(alunos[i].nome);
        }
    }
}
mostrarAprovados(alunos)