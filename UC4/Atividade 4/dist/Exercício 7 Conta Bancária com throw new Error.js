"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    titular;
    _saldo;
    constructor(titular, saldo) {
        this.titular = titular;
        this._saldo = saldo;
    }
    getSaldo() {
        return this._saldo;
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("número invalido");
        }
        else {
            this._saldo += valor;
        }
    }
    sacar(valor) {
        if (valor <= 0 || valor > this._saldo) {
            throw new Error("número invalido");
        }
        else {
            this._saldo -= valor;
        }
    }
}
let AAA = new ContaBancaria("AAA", 5999);
console.log(AAA.getSaldo());
AAA.depositar(51);
console.log(AAA.getSaldo());
AAA.sacar(100);
console.log(AAA.getSaldo());
AAA.sacar(6000);
AAA.sacar(-100);
AAA.depositar(-50);
AAA.depositar(-50);
