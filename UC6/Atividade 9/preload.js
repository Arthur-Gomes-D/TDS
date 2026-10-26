const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('alunos', {
    listar: () => ipcRenderer.invoke('alunos:listar'),
    criar: dados => ipcRenderer.invoke('alunos:criar', dados),
    atualizar: dados => ipcRenderer.invoke('alunos:atualizar', dados),
    excluir: id => ipcRenderer.invoke('alunos:excluir', id)
})