const { app, BrowserWindow, ipcMain, dialog } = require('electron') // importa o app e BrowserWindow do electron
const path = require('path') // importa path para o projeto
const db = require('./db')

let janela; // cria uma variavel chamda janela
function criarJanela() { // cria uma função chamada criarJanela
    janela = new BrowserWindow({ // da valor de janela de nevegador para janela
        width: 345, height: 345, // define a largura e altura da janela
        webPreferences: { // define as preferencias da janela
            nodeIntegration: false, contextIsolation: true, // define como falso a integração do node e a isolação de contexto como verdadeiro
            preload: path.join(__dirname, 'preload.js')
        }
    });
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

function registarar(canal, acao) {
    ipcMain.handle(canal, async (evento, dados) => {
        if (!janela || evento.sender !== janela.webContents ||
            evento.senderFrame !== janela.webContents.mainFrame) {
            return { ok: false, erro: 'origem não autorizada.' }
        }
        try {
            return { ok: true, dados: await acao(dados) }
        }
        catch (error) {
            return { ok: false, erro: 'falha na operação' };
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
        return {cancelado: true};
    }
    return db.excluir(id)
})