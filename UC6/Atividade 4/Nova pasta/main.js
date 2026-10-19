const { app, BrowserWindow } = require('electron') // importa o app e BrowserWindow do electron
const path = require('path') // importa path para o projeto

let janela; // cria uma variavel chamda janela
function criarJanela() { // cria uma função chamada criarJanela
    janela = new BrowserWindow({ // da valor de janela de nevegador para janela
        width: 345, height: 345, // define a largura e altura da janela
        webPreferences: { // define as preferencias da janela
            nodeIntegration: false, contextIsolation: true // define como falso a integração do node e a isolação de contexto como verdadeiro
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
setTimeout(() => {
    console.log(BrowserWindow.getAllWindows().length);
}, 1000)