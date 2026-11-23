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
    
    function editar(registro) {
        if (ocupado) {
            return;
        }
        idEdicao = registro.id;
        for (const campo of campos) {
            campo.value = registro[campo.name] ?? '';
        }
        titulo.textContent = `Editar ${nomeRegistro.toLowerCase()} ${registro.id}`;
        salvar.textContent = 'Salvar alterações';
        cancelar.hidden = false;
        avisar('Edite os campos e salve as alterações');
        campos[0].focus();
    }
    function excluir(registro) {
        executar(async () => {
            const resultado = conferir(await api.excluir(registro.id));

            if (resultado.cancelado) {
                return;
            }
            if (idEdicao === registro.id) {
                limparFormulario();
            }
            await atualizarAposGravacao('Exlusão concluída');
        });
    }
    function criarBotao(texto, classe, acao, id) {
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.textContent = texto;
        botao.className = classe;
        botao.setAttribute('aria-label', `${texto} ${nomeRegistro.toLowerCase()} ${id}`);
        botao.addEventListener('click', acao);
        return botao;
    }

    async function carregarLista() {
        const registros = conferir(await api.listar());
        lista.replaceChildren();
        
        resumo.textContent = registros.length
        ? `Total de registros: ${registros.length}`
        : 'Nenum registro cadastrado'
        
        for (const registro of registros) {
            const linha = document.createElement('tr');
            for (const campo of camposTabela) {
                const celula = document.createElement('td');
                celula.textContent = registro[campo] ?? '';
                linha.appendChild(celula);
            }
            const acoes = document.createElement('td');
            acoes.append(
                criarBotao('Editar', 'secundario', () => editar(registro), registro.id),
                criarBotao('Excluir', 'excluir', () => excluir(registro), registro.id)
            )
            lista.appendChild(acoes);
            lista.appendChild(linha)
        }
    }
    
    async function atualizarAposGravacao(texto) {
        try {
            await carregarLista();
            avisar(texto)
        } catch (erro) {
            avisar(`${texto} use "Atualizar lista" para consultar os dados. ${erro.message}`, true)
        }
    }
    
    async function carregarCadastro() {
        if (carregarOpcoes) {
            await carregarCadastro();
        }
        await carregarLista()
    }
    formulario.addEventListener('submit', evento => {
        evento.preventDefault();

        if (ocupado) {
            return;
        }

        const dados = Object.fromEntries(new FormData(formulario));

        executar(async () => {
            if (idEdicao === null) {
                conferir(await api.criar(dados));
            } else {
                conferir(await api.atualizar({ ...dados, id: idEdicao }));
            }
            limparFormulario();
            await atualizarAposGravacao('Registro salvo')
        })
    })

    cancelar.addEventListener('click', () => {
        limparFormulario();
        avisar('Edição cancelada');
    })
    document.getElementById('recarregar').addEventListener('click', () => {
        executar(async () => {
            await carregarCadastro();
            avisar('Lista atualizada.')
        })
    })
    document.getElementById('voltarMenu').addEventListener('click', () => window.menubar.inicio());
    document.getElementById('sair').addEventListener('click', () => window.auth.sair())
    executar(async () => {
        try {
            await carregarCadastro();
        } catch (erro) {
            resumo.textContent = 'Não foi possivel carregar a lista';
            throw erro;
        }
    })
}