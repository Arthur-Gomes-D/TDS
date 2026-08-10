class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        let imc = this.peso / (this.altura * this.altura)
        if (imc < 18.5) {
            console.log("┌━━━━━━━━━━━━━━━┐");
            console.log("┃   Baixo peso  ┃");
            console.log("└━━━━━━━━━━━━━━━┚");
        } else if (imc >= 18.5 && imc <= 24.99) {
            console.log("┌━━━━━━━━━━━━━━━┐");
            console.log("┃     normal    ┃");
            console.log("└━━━━━━━━━━━━━━━┚");
        } else if (imc >= 25 && imc <= 29.99) {
            console.log("┌━━━━━━━━━━━━━━━┐");
            console.log("┃   sobrepeso   ┃");
            console.log("└━━━━━━━━━━━━━━━┚");
        } else if (imc >= 30) {
            console.log("┌━━━━━━━━━━━━━━━┐");
            console.log("┃   Obesidade   ┃");
            console.log("└━━━━━━━━━━━━━━━┚");
        }
        console.log("IMC do " + this.nome + ": " + imc.toFixed(2));
        
    }
}

let pessoas = [new Pessoa("Trump", 108, 1.90), new Pessoa("Prabowo Subianto", 120, 1.66)]

pessoas[0].calcularIMC()
pessoas[1].calcularIMC()
