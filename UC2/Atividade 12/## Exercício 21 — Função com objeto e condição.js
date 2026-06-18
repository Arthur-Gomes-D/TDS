let aluno = {
    nome: "Ana",
    nota: 8
};

function verificarAluno(aluno) {
    if (aluno.nota >= 7) {
        console.log(aluno.nome, "está aprovado(a)");
        
    }else{
      console.log(aluno.nome, "está reprovado(a)");  
    }
}
verificarAluno(aluno)