"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = exports.Veiculo = void 0;
class Veiculo {
    marca;
    modelo;
    _velocidade;
    constructor(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this._velocidade = velocidade;
    }
    acelerar(incremento) {
        this._velocidade += incremento;
    }
    get velocidade() {
        return this._velocidade;
    }
}
exports.Veiculo = Veiculo;
class Moto extends Veiculo {
    _cilindradas;
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo, 0);
        this._cilindradas = cilindradas;
    }
    empinar() {
        if (this.velocidade <= 0) {
            console.log("Não poderá empinar");
        }
        else {
            console.log("Empinando..");
        }
    }
}
exports.Moto = Moto;
