
let aluno = {
    nome: "Ana",
    nota: 8
};

function mostrarAluno(aluno){
    for (const chave in aluno) {
        console.log(chave, aluno[chave]);
        
    }
}
