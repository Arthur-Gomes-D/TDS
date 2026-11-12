const {app, BrowserWindow, dialog, ipcMain, Menu} = require('electron')
const path = require('path');
const { pathToFileURL } = require('url');
const db = require('./db');
const { ok } = require('assert');

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
        return {ok: false, erro: erro.message}
    }
    if (erro.code === 'ER_DUP_ENTRY') {
        return { ok: false, erro: mensagensDuplicidade[pagina] || 'Já existe um registro com esses dados'};
    }
    
    console.error('Falha na operação', pagina, erro.code || erro.name);

    return {
        ok:false,
        erro: mensagensMySQL[erro.code] || 'Não foi possivel concluir a operação. Confira se o MySQL está em execução'
    }
}

function abirTela(pagina) {
    janela.loadFile(caminho(pagina)).catch((err) => {
        console.error('Fila ao abrir tela:', pagina, err.code)
    })
}

function criarJanela() {
    janela = new BrowserWindow({
        width: 900,
        height: 720,
        minWidth: 650,
        minHeight: 500,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration:false,
            contextIsolation: true,
            sandbox: true
        }
    });
    janela.webContents.setWindowOpenHandler(() => ({action: "deny"}));
    janela.webContents.on('will-navigate', evento => evento.preventDefault());
    janela.on('closed', () => {
        janela = null;
        sessao = null;
    });
    abirTela('login');
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
        return {ok: false, erro: 'Abra a tela de login'}
    }

    sessao = null;
    
    try {
        const usuario = await db.autenticar(dados);

        if (!origemValida(evento, 'login')) {
            return {ok: false, erro: 'A tela de login foi fechada'};
        }
        sessao = usuario;
        return {ok:true};
    } catch (erro) {
        return respostaErro(erro, 'login')
    }
});

ipcMain.on('auth:abrirPrincipal', evento => {
    if (sessao && origemValida(evento, 'login')) {
        abirTela('principal')
    }
});

ipcMain.on('auth:sair', evento => {
    if (sessao && paginasInternas.some(pagina => origemValida(evento, pagina))) {
        sessao = null;
        abirTela('login');
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