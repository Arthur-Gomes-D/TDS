"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transacao {
    tipo;
    valor;
    data;
    constructor(tipo, valor, data) {
        this.tipo = tipo;
        this.valor = valor;
        this.data = data;
    }
}
class ContaCorrenteComExtrato {
    _saldo;
    _historico;
    constructor() {
        this._saldo = 0;
        this._historico = [];
    }
    depositar(dinheiro) {
        this._saldo += dinheiro;
        this._historico.push(new Transacao('DEPOSITO', dinheiro, new Date()));
        console.log("Valor depoistado: " + dinheiro);
        console.log("Saldo: " + this._saldo);
    }
    sacar(dinheiro) {
        if (dinheiro > this._saldo) {
            console.log("Dinheiro muito alto");
        }
        else {
            this._saldo -= dinheiro;
            this._historico.push(new Transacao('SAQUE', dinheiro, new Date()));
        }
    }
    gerarExtrato() {
        console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        this._historico.forEach((his) => console.log(`TIPO: ${his.tipo}\nVALOR: ${his.valor}\nDATA: ${his.data}`));
        console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
    }
}
let conta = new ContaCorrenteComExtrato();
conta.depositar(1000);
conta.sacar(10);
conta.gerarExtrato();
