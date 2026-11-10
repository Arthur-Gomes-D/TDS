const {app, BrowserWindow, dialog, ipcMain, Menu} = require('electron')
const path = require('path');
const { pathToFileURL } = require('url');

let janela = null;
let sessao = null;

function caminho(pagina) {
    return path.join(__dirname, pagina + '.html')
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
        janela == null;
        sessao == null;
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