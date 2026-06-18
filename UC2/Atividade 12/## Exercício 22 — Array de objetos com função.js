let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carla", nota: 9 }
];

function listarAlunos(alunos) {
    for (let i = 0; i <= (alunos.length - 1); i++) {
        for (chave in alunos[i]) {
            console.log(chave, alunos[i][chave]);

        }
    }
}
listarAlunos(alunos)