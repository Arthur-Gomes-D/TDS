function conferir(resposta) {
    if (!resposta.ok) {
        throw new Error(resposta.erro);
    }
    return resposta.dados;
}
function iniciarCadastro({ api, tituloNovo, nomeRegistro, camposTabela, carregarOpcoes }) {
    const formulario = document.getElementById('formulario');
    const campos = [...formulario.querySelectorAll('[name]')];
    const titulo = document.getElementById('tituloFormulario');
    const lista = document.getElementById('lista');
    const resumo = document.getElementById('resumo');
    const mensagem = document.getElementById('mensagem');
    const salvar = document.getElementById('salvar');
    const cancelar = document.getElementById('cancelar');
    let idEdicao = null;
    let ocupado = false;
    function avisar(texto, erro = false) {
        mensagem.textContent = texto;
        mensagem.classList.toggle('erro', erro);
    }
    function bloquearControles(bloqueados) {
        for (const controle of document.querySelectorAll('button, input, select, textarea')) {
            controle.disabled = bloqueados;
        }
    }
    async function executar(tarefa) {
        if (ocupado) {
            return;
        }
        ocupado = true;
        bloquearControles(true);
        try {
            await tarefa();
        } catch (erro) {
            avisar(erro.message || 'Não foi possível concluir a operação.', true);
        } finally {
            ocupado = false;
            bloquearControles(false);
        }
    }
    function limparFormulario() {
        idEdicao = null;
        formulario.reset();
        titulo.textContent = tituloNovo;
        salvar.textContent = 'Cadastrar';
        cancelar.hidden = true;
    }
}