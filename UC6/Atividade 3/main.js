const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation:true
        }
    });

    win.loadFile("index.html")
}
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
});

const janelaOperacaoWid = 500
const janelaOperacaoHei = 400

ipcMain.on('abrir-Adi', () => {
    const janela = new BrowserWindow({
        width: janelaOperacaoWid,
        height: janelaOperacaoHei,
        title:"Adição"
    })
    janela.loadFile("adicao.html")
})
ipcMain.on('abrir-Sub', () => {
    const janela = new BrowserWindow({
        width: janelaOperacaoWid,
        height: janelaOperacaoHei,
        title:"Subtração"
    })
    janela.loadFile("subtracao.html")
})
ipcMain.on('abrir-Mul', () => {
    const janela = new BrowserWindow({
        width: janelaOperacaoWid,
        height: janelaOperacaoHei,
        title:"multiplicação"
    })
    janela.loadFile("multiplicacao.html")
})
ipcMain.on('abrir-Div', () => {
    const janela = new BrowserWindow({
        width: janelaOperacaoWid,
        height: janelaOperacaoHei,
        title:"divisão"
    })
    janela.loadFile("divisao.html")
})