const { app, BrowserWindow, ipcMain, dialog } = require('electron') // importa o app e BrowserWindow do electron
const path = require('path') // importa path para o projeto
const db = require('./db');
const { ok } = require('assert');

let janela; // cria uma variavel chamda janela
function criarJanela() { // cria uma função chamada criarJanela
    janela = new BrowserWindow({ // da valor de janela de nevegador para janela
        width: 345, height: 345, // define a largura e altura da janela
        webPreferences: { // define as preferencias da janela
            nodeIntegration: false, contextIsolation: true, // define como falso a integração do node e a isolação de contexto como verdadeiro
            preload: path.join(__dirname, 'preload.js')
        }
    });
    janela.webContents.setWindowOpenHandler(() => ({ action: 'deny' }))
    janela.webContents.on('will-navigate', evento => evento.preventDefault())
    janela.loadFile(path.join(__dirname, 'index.html')) // carrega o arquivo "index.html" que está na raiz o diretorio como pagina que deve ser carregada na janela
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
        if (!janela || evento.sender !== janela.webContents ||
            evento.senderFrame !== janela.webContents.mainFrame) {
            return { ok: false, erro: 'origem não autorizada.' }
        }
        try {
            return { ok: true, dados: await acao(dados) }
        }
        catch (erro) {
            return { ok: false, erro: mensagemErro(erro) }
        }
    })
}
registarar('alunos:listar', () => db.listar());
registarar('alunos:criar', dados => db.criar(dados))
registarar('alunos:atualizar', dados => db.atualizar(dados))
registarar('alunos:excluir', async id => {
    const resposta = await dialog.showMessageBox(janela, {
        type: 'question', buttons: ['Cancelar', "Excluir"],
        defaultId: 0, cancelId: 0, message: `Exluir aluno de código ${id}?`
    });
    if (resposta.response !== 1) {
        return { cancelado: true };
    }
    return db.excluir(id)
})

let encerrando = false
app.on('before-quit', evento => {
    if (encerrando) {
        return
    }
    evento.preventDefault()
    encerrando = true
    db.fechar().catch(() => {}).finally(() => app.quit());
})