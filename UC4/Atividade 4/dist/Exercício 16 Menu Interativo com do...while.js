"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require('prompt-sync')();
let escolha;
class FilaAtendimento {
    clientes;
    constructor() {
        this.clientes = [];
    }
    entrarNaFile(nome) {
        this.clientes.push(nome);
    }
    atenderProximo() {
        this.clientes.shift();
    }
}
let atendimento = new FilaAtendimento();
do {
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-");
    console.log("1 — Adicionar cliente");
    console.log("2 — Atender cliente");
    console.log("3 — Sair");
    escolha = prompt("Input: ");
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-");
    if (escolha >= 1 && escolha <= 3) {
        if (escolha == 1) {
            let nome = prompt("Nome do cliente: ");
            atendimento.entrarNaFile(nome);
        }
        else if (escolha == 2) {
            console.log("Cliente atendido!");
            atendimento.atenderProximo();
        }
        else {
            console.log("Saindo ...");
            break;
        }
    }
    else {
        console.log("Opição não encontrado");
    }
} while (true);
