class Pessoa {
    nome:string
    peso:number
    altura:number
    constructor(nome:string, peso:number, altura:number) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        let imc = this.peso / (this.altura * this.altura)
            console.log("┌───────────────────────────┐");
            console.log(`│ nome: ${this.nome}`);
            console.log("│───────────────────────────┘");
        if (imc < 18.5) {
            console.log("│ Baixo peso    │");
            console.log("└───────────────┘");
        } else if (imc >= 18.5 && imc <= 24.99) {
            console.log("│ normal        │");
            console.log("└───────────────┘");
        } else if (imc >= 25 && imc <= 29.99) {
            console.log("│ sobrepeso     │");
            console.log("└───────────────┘");
        } else if (imc >= 30) {
            console.log("│ Obesidade     │");
            console.log("└───────────────┘");
        }
    }
}

let pessoas = [new Pessoa("Trump", 108, 1.90), new Pessoa("Prabowo Subianto", 120, 1.66)]

pessoas[0].calcularIMC()
pessoas[1].calcularIMC()
