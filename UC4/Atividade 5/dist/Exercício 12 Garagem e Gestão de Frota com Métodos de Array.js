"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VeiculoClass_1 = require("./VeiculoClass");
class Carro extends VeiculoClass_1.Veiculo {
    constructor(marca, modelo, velocidade) {
        super(marca, modelo, velocidade);
    }
}
class Garagem {
    _veiculos;
    constructor() {
        this._veiculos = [];
    }
    estacionar(veiculo) {
        console.log("Estacioando carro...");
        this._veiculos.push(veiculo);
    }
    burcarPorMarca(marca) {
        return this._veiculos.filter((veicul) => veicul.marca == marca);
    }
    calcularMediaVelocidade() {
        const quant = this._veiculos.length;
        const initialValue = 0;
        let total = this._veiculos.reduce((accumulator, currentValue) => accumulator + currentValue.velocidade, 0);
        return total / quant;
    }
}
let carros = [new Carro("ABC", "123", 100), new Carro("123", "ABG", 120)];
let garagem = new Garagem();
garagem.estacionar(carros[0]);
garagem.estacionar(carros[1]);
console.log(garagem.burcarPorMarca("ABC"));
console.log(garagem.calcularMediaVelocidade());
