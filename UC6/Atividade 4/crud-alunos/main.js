const { app, BrowserWindow } = require('electron')
const path = require('path')

let janela;
function criarJanela() {
    janela = new BrowserWindow({
        width: 900, height: 680,
        webPreferences: {
            nodeIntegration: false, contextIsolation: true
        }
    });
    janela.loadFile(path.join(__dirname, 'index.html'))
}
app.whenReady().then(criarJanela());
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        criarJanela()
    }
})