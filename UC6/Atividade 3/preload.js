const { contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('calcBTNs', {
    abrirAdi: () => ipcRenderer.send('abrir-Adi'),
    abrirSub: () => ipcRenderer.send('abrir-Sub'),
    abrirMul: () => ipcRenderer.send('abrir-Mul'),
    abrirDiv: () => ipcRenderer.send('abrir-Div')
})