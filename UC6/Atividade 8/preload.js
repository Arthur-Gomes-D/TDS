const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('alunos', {
    listar: () => ipcRenderer.invoke('alunos:listar'),
    criar: () => ipcRenderer.invoke('alunos:criar', dados)
})