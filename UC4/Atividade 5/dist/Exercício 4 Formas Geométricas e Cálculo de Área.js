"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Forma {
    cor;
    constructor(cor) {
        this.cor = cor;
    }
    calcularArea() {
        return 0;
    }
}
class Quadrado extends Forma {
    _lado;
    constructor(cor, lado) {
        super(cor);
        this._lado = lado;
    }
    calcularArea() {
        return this._lado ** 2;
    }
}
const quadrado = new Quadrado("azul", 5);
console.log(quadrado.calcularArea());
class circulo extends Forma {
    _raio;
    constructor(cor, raio) {
        super(cor);
        this._raio = raio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this._raio, 2);
    }
}
const lingkaran = new circulo("merah", 20);
console.log(lingkaran.calcularArea());
