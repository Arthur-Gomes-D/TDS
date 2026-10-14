const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')

function createWindow() {
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
        app.quit();
    }
});

ipcMain.on('abrir-sobre', () => {
    const janelaSobre = new BrowserWindow({
        width: 400,
        height: 300,
        title: "sobre"
    })

    janelaSobre.loadFile("sobre.html")
})