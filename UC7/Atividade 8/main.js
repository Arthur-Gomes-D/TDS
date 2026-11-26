const { app, BrowserWindow, dialog, ipcMain, Menu } = require('electron')
const path = require('path');
const { pathToFileURL } = require('url');
const db = require('./db');

const cadastros = ['alunos', 'cursos', 'matriculas'];
const paginasInternas = ['principal', ...cadastros]

const mensagensDuplicidade = {
    alunos: 'Este e-mail já está cadastrado.',
    cursos: 'Já existe um curso com esse nome.',
    matriculas: 'Este aluno já está matriculado neste curso'
}

const mensagensMySQL = {
    ER_ROW_IS_REFERENCED_2: 'Há matrículas vinculadas. Exclua essas matrículas primeiro.',
    ER_NO_REFERENCED_ROW_2: 'Aluno ou curso não encontrado. Atualize a lista.',
    ER_ACCESS_DENIED_ERROR: 'Acesso ao MySQL negado. Confira o usuário e a senha do arquivo .env.',
    ER_BAD_DB_ERROR: 'Banco não encontrado. Execute banco. sql e confira o arquivo .env.',
    ER_NO_SUCH_TABLE: 'Tabela não encontrada. confira o banco configurado no arquivo .env.',
    ER_BAD_FIELD_ERROR: 'Coluna não encontrada. Confira a estrutura das tabelas. ',
    ER_TABLEACCESS_DENIED_ERROR: 'A conta do MySQL não tem permissão para acessar esta tabela.'
};

let janela = null;
let sessao = null;

function caminho(pagina) {
    return path.join(__dirname, pagina + '.html')
}

function origemValida(evento, pagina) {
    return Boolean(
        janela &&
        evento.sender === janela.webContents &&
        evento.senderFrame &&
        evento.senderFrame === janela.webContents.mainFrame &&
        evento.senderFrame.url === pathToFileURL(caminho(pagina)).href
    );
}

function respostaErro(erro, pagina) {
    if (erro.code === 'VALIDACAO') {
        return { ok: false, erro: erro.message }
    }
    if (erro.code === 'ER_DUP_ENTRY') {
        return { ok: false, erro: mensagensDuplicidade[pagina] || 'Já existe um registro com esses dados' };
    }

    console.error('Falha na operação', pagina, erro);

    return {
        ok: false,
        erro: mensagensMySQL[erro.code] || 'Não foi possivel concluir a operação. Confira se o MySQL está em execução'
    }
}
function abrirTela(pagina) {
    janela.loadFile(caminho(pagina)).catch((err) => {
        console.error('Fila ao abrir tela:', pagina, err.code)
    })
}

ipcMain.on('menu:abrir', (evento, destino) => {
    if (sessao && origemValida(evento, 'principal') && cadastros.includes(destino)) {
        abrirTela(destino);
    }
});
ipcMain.on('menu:inicio', evento => {
    if (sessao && cadastros.some(pagina => origemValida(evento, pagina))) {
        abrirTela('principal');
    }
});
function registrar(pagina, operacao, acao) {
    ipcMain.handle(pagina + ':' + operacao, async (evento, dados) => {
        if (!sessao || !origemValida(evento, pagina)) {
            return { ok: false, erro: 'Acesso ao cadastro não autorizado.' };
        }
        try {
            return { ok: true, dados: await acao(dados, evento) };
        } catch (erro) {
            return respostaErro(erro, pagina);
        }
    });
}
function registrarCadastro(pagina, nome, cadastro) {
    registrar(pagina, 'listar', cadastro.listar);
    registrar(pagina, 'criar', cadastro.criar);
    registrar(pagina, 'atualizar', cadastro.atualizar);

    registrar(pagina, 'excluir', async (id, evento) => {
        if (!Number.isInteger(id) || id <= 0 || id > 4294967295) {
            return { cancelado: true };
        }
        const sessaoAtual = sessao;
        const escolha = await dialog.showMessageBox(janela, {
            type: "question",
            title: 'Excluir' + nome,
            message: `Excluir ${nome} de código ${id}?`,
            buttons: ['Cancelar', 'Excluir'],
            defaultId: 0,
            cancelId: 0,
        });
        if (escolha.response !== 1 && sessao !== sessaoAtual || !origemValida(evento, pagina)) {
            return { cancelado: true };
        }
        return cadastro.excluir(id);
    });
}

registrarCadastro('alunos', 'Aluno', db.alunos);
registrarCadastro('cursos', 'Curso', db.cursos);
registrar('matriculas', 'listar', db.matriculas.listar);
registrar('matriculas', 'opcoes', db.matriculas.opcoes);



function criarJanela() {
    janela = new BrowserWindow({
        width: 900,
        height: 720,
        minWidth: 650,
        minHeight: 500,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true
        }
    });
    janela.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
    janela.webContents.on('will-navigate', evento => evento.preventDefault());
    janela.on('closed', () => {
        janela = null;
        sessao = null;
    });
    abrirTela('login');
}

app.whenReady().then(() => {
    Menu.setApplicationMenu(null)
    criarJanela();
    app.on('activate', () => {
        if (!janela) {
            criarJanela();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.handle('auth:login', async (evento, dados) => {
    if (!origemValida(evento, 'login')) {
        return { ok: false, erro: 'Abra a tela de login' }
    }

    sessao = null;

    try {
        const usuario = await db.autenticar(dados);

        if (!origemValida(evento, 'login')) {
            return { ok: false, erro: 'A tela de login foi fechada' };
        }
        sessao = usuario;
        return { ok: true };
    } catch (erro) {
        return respostaErro(erro, 'login')
    }
});

ipcMain.on('auth:abrirPrincipal', evento => {
    if (sessao && origemValida(evento, 'login')) {
        abrirTela('principal')
    }
});

ipcMain.on('auth:sair', evento => {
    if (sessao && paginasInternas.some(pagina => origemValida(evento, pagina))) {
        sessao = null;
        abrirTela('login');
    }
})

let encerrando = false;

app.on('before-quit', evento => {
    if (encerrando) {
        return;
    }

    evento.preventDefault();
    encerrando = true

    db.fechar()
        .catch(erro => console.error('Falha ao fechar o MySQL', erro.code || erro.name))
        .finally(() => app.quit());

})