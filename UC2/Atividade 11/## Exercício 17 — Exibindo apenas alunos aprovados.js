const alunos = [
    {
        nome: "Hammond",
        nota: 7
    },
    {
        nome: "Ervin",
        nota: 5
    },
    {
        nome: "Claudinho",
        nota: 8
    }
]
for (let i in alunos) {
    if (alunos[i].nota >= 7) {
        console.log("nome: " + alunos[i].nome);
        console.log("nota: " + alunos[i].nota);
        console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
    }

}