"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    constructor(titular, saldo) {
        this.saldo = saldo;
        this.titular = titular;
    }
    depositar(num) {
        this.saldo += num;
        console.log("┌────────────────────────┐");
        console.log("│ Depositando...         │");
        console.log("│────────────────────────│");
        console.log(`│ Valor: ${num}`);
        console.log(`│ Valor: ${this.saldo}`);
        console.log("└────────────────────────┘");
    }
    sacar(num) {
        if (num > this.saldo) {
            console.log("┌────────────────────────┐");
            console.log("│ ERRO!!!                │");
            console.log("│────────────────────────│");
            console.log(`│ VALOR MUITO ALTO!!!    │`);
            console.log("└────────────────────────┘");
        }
        else {
            this.saldo -= num;
            console.log("┌────────────────────────┐");
            console.log("│ Sacando...             │");
            console.log("│────────────────────────│");
            console.log(`│ Valor sacado: ${num}`);
            console.log(`│ Saldo: ${this.saldo}`);
            console.log("└────────────────────────┘");
        }
    }
}
let contaTeste = new ContaBancaria("João Testa", 1000);
contaTeste.sacar(100);
contaTeste.depositar(250);
