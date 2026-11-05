const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const db = require('./db');
const paginas = {
    login: pathToFileURL(path.join(__dirname, 'login.html')).href,
    cadastro: pathToFileURL(path.join(__dirname, 'index.html')).href
};
let janela;
let sessao = null;
function criarJanela() { // cria uma função chamada criarJanela
    sessao = null
    janela = new BrowserWindow({ // da valor de janela de nevegador para janela
        width: 345, height: 345, // define a largura e altura da janela
        webPreferences: { // define as preferencias da janela
            nodeIntegration: false, contextIsolation: true, // define como falso a integração do node e a isolação de contexto como verdadeiro
            preload: path.join(__dirname, 'preload.js')
        }
    });
    janela.webContents.setWindowOpenHandler(() => ({ action: 'deny' }))
    janela.webContents.on('will-navigate', evento => evento.preventDefault())
    janela.loadFile(path.join(__dirname, 'login.html')) // carrega o arquivo "index.html" que está na raiz o diretorio como pagina que deve ser carregada na janela
    janela.on('closed', () => {
        sessao = null;
        janela = null;
    })
}
app.whenReady().then(criarJanela); // quando o aplicativo estiver pronto executa a função criarJanela
app.on('window-all-closed', () => { // pega o evento de fechar janela
    if (process.platform !== 'darwin') { // se a plataforma for diferente de darwin
        app.quit() // o aplicativo fecha
    }
})
app.on('activate', () => {  // quando aplicativo estiver tivado
    if (BrowserWindow.getAllWindows().length === 0) { // e a quantidade de janelas forem 0
        criarJanela() // executar função criarJanela
    }
})

function origemValida(evento, pagina) {
    return Boolean(janela && !janela.isDestroyed() &&
        evento.sender === janela.webContents &&
        evento.senderFrame &&
        evento.senderFrame === janela.webContents.mainFrame &&
        evento.senderFrame.url === paginas[pagina]);
}

function mensagemErro(erro) {
    if (erro.code === 'VALIDACAO') {
        return erro.message
    }
    if (erro.code === 'ER_DUP_ENTRY') {
        return 'E-mail já cadastrado'
    }
    if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
        return 'Confira usuário e senha'
    }
    if (erro.code === 'ER_BAD_BD_ERROR' || erro.code == 'ER_NO_SUCH_TABLE') {
        return 'Execute o banco.sql no servidor correto'
    }
    return 'Confira o serviço MySQL e a configuração no .env'
}

function registarar(canal, acao) {
    ipcMain.handle(canal, async (evento, dados) => {
        if (!origemValida(evento, 'cadastro') || !sessao) {
            return { ok: false, erro: 'Faça login para continuar.' };
        }
        try {
            return { ok: true, dados: await acao(dados) };
        } catch (erro) {
            console.error('Falha no CRUD:', erro.code || 'ERRO');
            return { ok: false, erro: mensagemErro(erro) };
        }
    });
}
ipcMain.handle('auth:login', async (evento, dados) => {
    if (!origemValida(evento, 'login')) {
        return { ok: false, erro: 'Origem não autorizada.' };
    }
    try {
        sessao = null;
        sessao = await db.autenticar(dados);
        return { ok: true };
    } catch (erro) {
        console.error('Falha no login:', erro.code || 'ERRO');
        return { ok: false, erro: mensagemErro(erro) };
    }
});

ipcMain.on('auth:abrirCadastro', evento => {
    if (!origemValida(evento, 'login') || !sessao) {
        return;
    }
    janela.loadFile(path.join(__dirname, 'index.html'));
})

ipcMain.on('auth:sair', evento => {
    if (!origemValida(evento, 'cadastro') || !sessao) {
        return;
    }
    sessao = null;
    janela.loadFile(path.join(__dirname, 'login.html'))
})

registarar('alunos:listar', () => db.listar());
registarar('alunos:criar', dados => db.criar(dados))
registarar('alunos:atualizar', dados => db.atualizar(dados))
registarar('alunos:excluir', async id => {
    const resposta = await dialog.showMessageBox(janela, {
        type: 'question', buttons: ['Cancelar', "Excluir"],
        defaultId: 0, cancelId: 0, message: `Exluir aluno de código ${id}?`
    });
    if (resposta.response !== 1) return { cancelado: true };
    return db.excluir(id)
})

let encerrando = false
app.on('before-quit', evento => {
    if (encerrando) {
        return
    }
    evento.preventDefault()
    encerrando = true
    db.fechar().catch(() => { }).finally(() => app.quit());
})