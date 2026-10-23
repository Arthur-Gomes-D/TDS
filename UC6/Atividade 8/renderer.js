const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const lista = document.getElementById('lista');
const mensagem = document.getElementById('mensagem');
function avisar(texto) { mensagem.textContent = texto; }
function conferir(resposta) {
    if (!resposta.ok) throw new Error(resposta.erro);
    return resposta.dados;
}
async function carregar() {
    const alunos = conferir(await window.alunos.listar());
    lista.replaceChildren();
    for (const aluno of alunos) {
        const linha = document.createElement('tr');
        for (const valor of [aluno.id, aluno.nome, aluno.email]) {
            const celula = document.createElement('td');
            celula.textContent = valor;
            linha.appendChild(celula);
        }
        lista.appendChild(linha);
    }
}
function consultar() {
    carregar().catch(erro => avisar(erro.message));
}
document.getElementById('recarregar')
    .addEventListener('click', consultar);
consultar();

async function executar(tarefa) {
    try {
        await tarefa();
    } catch (error) {
        avisar(error.tarefa)
    }
}

function limpar() {
    formulario.reset()
}

formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    executar(async () => {
        const dados = {nome: nome.value.trim(), email: email.value.trim()};
        conferir(await window.alunos.criar(dados));
        limpar()
        await carregar()
        avisar('Aluno cadastrado.')
    })
})