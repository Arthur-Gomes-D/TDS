"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const moto = new Moto("HJFS", "nnj32", 25);
moto.empinar();
moto.acelerar(30);
moto.empinar();
