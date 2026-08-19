declare var require: any
const prompt = require('prompt-sync')();
let escolha: number
class FilaAtendimento {
    private clientes: string[]
    constructor() {
        this.clientes = []
    }
    public entrarNaFile(nome: string): void {
        this.clientes.push(nome)
    }
    public atenderProximo(): void {
        this.clientes.shift()
    }
}

let atendimento = new FilaAtendimento()

do {
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-");
    console.log("1 — Adicionar cliente");
    console.log("2 — Atender cliente");
    console.log("3 — Sair");
    escolha = prompt("Input: ")
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-");
    if (escolha >= 1 && escolha <= 3) {
        if (escolha == 1) {
            let nome:string = prompt("Nome do cliente: ")
            atendimento.entrarNaFile(nome)
        } else if (escolha == 2) {
            console.log("Cliente atendido!");
            atendimento.atenderProximo()
        } else {
            console.log("Saindo ...");
            break
        }
    } else {
        console.log("Opição não encontrado");
    }
} while (true);