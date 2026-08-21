"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarteiraDigital {
    _saldoBRL;
    _saldoUSD;
    taxaCambio;
    constructor(saldoBRL) {
        this._saldoBRL = saldoBRL;
        this._saldoUSD = 0;
        this.taxaCambio = 0.19;
    }
    comprarDolares(valorBRL) {
        if (valorBRL <= this._saldoBRL) {
            this._saldoBRL -= valorBRL;
            this._saldoUSD += (this.taxaCambio * valorBRL);
            console.log(`Saldo de BRL atual: ${this._saldoBRL}\nSalo de USD atual: ${this._saldoUSD}`);
        }
        else {
            throw new Error("saldo insuficente");
        }
    }
}
let carteira = new CarteiraDigital(1000);
carteira.comprarDolares(10);
carteira.comprarDolares(62);
try {
    carteira.comprarDolares(-1);
}
catch (error) {
    console.log("Valor invalido");
}
