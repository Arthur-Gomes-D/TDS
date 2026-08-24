import { Veiculo } from "./VeiculoClass" // não funciona sem a extenção do arquivo e não compila se tem a extenção

class Carro extends Veiculo {
    constructor(marca: string, modelo: string, velocidade: number) {
        super(marca, modelo, velocidade)
    }
}

class Garagem {
    private _veiculos: Veiculo[]
    constructor() {
        this._veiculos = []
    }
    estacionar(veiculo: Veiculo): void {
        console.log("Estacioando carro...");
        this._veiculos.push(veiculo)
    }
    burcarPorMarca(marca: string): Veiculo[] {
        return this._veiculos.filter((veicul) => veicul.marca == marca)
    }
    calcularMediaVelocidade(): number {
        const quant = this._veiculos.length
        const initialValue = 0;
        let total = this._veiculos.reduce(
            (accumulator, currentValue) => accumulator + currentValue.velocidade, 0
        );
        return total/quant
    }
}
let carros = [new Carro("ABC", "123", 100), new Carro("123", "ABG", 120)]
let garagem = new Garagem()
garagem.estacionar(carros[0])
garagem.estacionar(carros[1])
console.log(garagem.burcarPorMarca("ABC"))
console.log(garagem.calcularMediaVelocidade())