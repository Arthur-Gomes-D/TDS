class Retangulo {
    private _largura: number
    private _altura: number
    constructor(altura: number, largura: number) {
        this._altura = altura
        this._largura = largura
    }
    set largura(num: number) {
        if (num <= 0) {
            throw new Error("largura igual ou menor que zero");
        } else {
            this._largura = num
        }
    }
    get largura(): number {
        return this._largura
    }
    set altura(num: number) {
        if (num <= 0) {
            throw new Error("altura igual ou menor que zero");
        } else {
            this._largura = num
        }
    }

    get altura(): number {
        return this._altura
    }

    calcularArea() {
        return this._largura * this._altura
    }
    calcularPerimetro() {
        return 2 * (this._largura + this._altura)
    }
}

let retangulo = new Retangulo(15, 10)
console.log(retangulo.calcularArea());
console.log(retangulo.calcularPerimetro());

retangulo.altura = 20

console.log(retangulo.calcularArea());
console.log(retangulo.calcularPerimetro());

retangulo.largura = 2

console.log(retangulo.calcularArea());
console.log(retangulo.calcularPerimetro());

retangulo.altura = 0
retangulo.largura = 0
