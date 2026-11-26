const aluno = document.getElementById('aluno');
const curso = document.getElementById('curso');
const dataMatricula = document.getElementById('dataMatricula');

const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');
dataMatricula.defaultValue = `${ano}-${mes}-${dia}`

function preencherOpcoes(campo, registros, rotulo, avisoVazio) {
    const selecionado = campo.value;

    campo.replaceChildren(
        new Option(registros.length ? rotulo : avisoVazio, '')
    );

    for (const registro of registros) {
        campo.add(
            new Option(
                `${registro.nome} (código ${registro.id})`,
                registro.id
            )
        );
    }

    if (registros.some(registro => String(registro.id) === selecionado)) {
        campo.value = selecionado;
    }
}

async function carregarOpcoes() {
    const opcoes = conferir(await window.matriculas.opcoes());
    preencherOpcoes(aluno, opcoes.alunos, 'Selecione o aluno', 'Cadastre um aluno primeiro')
    preencherOpcoes(curso, opcoes.cursos, 'Selecione o curso', 'Cadastre um curso primeiro')

}

iniciarCadastro({
    api: window.matriculas,
    tituloNovo: 'Nova matrícula',
    nomeRegistro: 'Matrícula',
    camposTabela: ['id', 'aluno_nome', 'curso_nome', 'data_formatada'], carregarOpcoes

})