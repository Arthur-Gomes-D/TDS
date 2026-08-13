"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Boletim {
    constructor(nome, nota1, nota2) {
        this.nome = nome;
        this.notas = [nota1, nota2];
    }
    calcularMedia() {
        let total = 0;
        for (let i = 0; i <= this.notas.length - 1; i++) {
            total += this.notas[i];
        }
        let media = total / this.notas.length;
        if (media >= 7) {
            console.log("Aprovado");
        }
        else {
            console.log("Reprovado");
        }
    }
}
let boletimNovo = new Boletim("ijufsj", 7, 7);
boletimNovo.calcularMedia();
