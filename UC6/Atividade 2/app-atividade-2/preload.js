const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    abrirSobre: () => ipcRenderer.send('abrir-sobre')
})