const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const lista = document.getElementById('lista');
const mensagem = document.getElementById('mensagem');
let idEdicao = null
let ocupado = false
function limpar() {
    formulario.reset()
    idEdicao = null;
    document.getElementById('salvar').textContent = 'Cadastrar'
    document.getElementById('tituloFormulario').textContent = 'Novo aluno'
    document.getElementById('cancelar').hidden = true
}
document.getElementById('cancelar').addEventListener('click', limpar)

function avisar(texto) { mensagem.textContent = texto; }
function conferir(resposta) {
    if (!resposta.ok) throw new Error(resposta.erro);
    return resposta.dados;
}

function botao(texto, acao) {
    const btn = document.createElement('button');
    btn.type = 'button'
    btn.textContent = texto
    btn.addEventListener('click', acao)
    return btn;
}

function acoesAluno(aluno) {
    const celula = document.createElement('td');
    celula.appendChild(botao('Editar', () => editar(aluno)))
    celula.appendChild(botao('Excluir', () => {
        executar(() => excluirAluno(aluno.id))
    }))
    return celula
}

async function excluirAluno(id) {
    const r = conferir(await window.alunos.excluir(id))
    if (r.cancelado) {
        return;
    }
    if (idEdicao === id) {
        limpar()
    }
    atualizarLista('Aluno excluído')
}

function editar(aluno) {
    idEdicao = aluno.id
    nome.value = aluno.nome
    email.value = aluno.email
    document.getElementById('salvar').textContent = 'Salvar alterações'
    document.getElementById('tituloFormulario').textContent = 'Editar aluno'
    document.getElementById('cancelar').hidden = false
    nome.focus();
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
        linha.appendChild(acoesAluno(aluno))
        lista.appendChild(linha)
    }
}
function consultar() {
    executar(async () => {
        await carregar();
        avisar('lista atualizada')
    })
}
document.getElementById('recarregar')
    .addEventListener('click', consultar);
consultar();

async function executar(tarefa) {
    if (ocupado) return;
    ocupado = true;
    const campos = document.querySelectorAll('button, input');
    campos.forEach(el => { el.disabled = true; });
    try { await tarefa(); }
    catch (erro) { avisar(erro.message); }
    finally {
        ocupado = false;
        campos.forEach(el => { el.disabled = false; });
    }
}

formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    executar(async () => {
        const dados = { nome: nome.value.trim(), email: email.value.trim() };
        if (idEdicao === null) {
            conferir(await window.alunos.criar(dados))
        } else {
            conferir(await window.alunos.atualizar({ id: idEdicao, ...dados }))
        }
        limpar()
        atualizarLista('Aluno salvo')
    })
})

async function atualizarLista(texto) {
    try {
        await carregar()
        avisar(texto)
    } catch (error) {
        avisar(texto + 'Lista desatualizada. Use Atualizar lista.');
    }
}