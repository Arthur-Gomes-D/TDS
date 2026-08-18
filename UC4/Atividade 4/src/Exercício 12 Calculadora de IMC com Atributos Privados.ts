class Pessoa {
    public nome: string
    private _peso: number
    private _altura: number
    constructor(nome: string, peso: number, altura: number) {
        if (peso <= 0 || altura <= 0) {
            throw new Error("Peso ou altura invalidos");

        } else {
            this.nome = nome
            this._peso = peso
            this._altura = altura
        }
    }

    set altura(novaAltura:number){
        if (novaAltura <= 0) {
            throw new Error("Altura invalida");
        }else{
            this._altura = novaAltura
        }
    }

    set peso(novoPeso:number){
        if (novoPeso <= 0) {
            throw new Error("Peso invalido");
        }else{
            this._peso = novoPeso
        }
    }

    private calcularIMC():number {
        return this._peso / (this._altura ** 2)
    }
    public getIMC():number{
        return this.calcularIMC()
    }
    public getClassificacaoIMC(){
        let imc = this.getIMC()
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

const pessoaA = new Pessoa("arguments", 100, 1.80);
console.log(`IMC: ${pessoaA.getIMC().toFixed(2)}`);
pessoaA.getClassificacaoIMC()