"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function nomorAcak(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Eleicao {
    constructor() {
        this.votosCandidato1 = 0;
        this.votosCandidato2 = 0;
        this.votosBrancos = 0;
    }
    votar(num) {
        if (num == 1) {
            this.votosCandidato1 += 1;
        }
        else if (num == 2) {
            this.votosCandidato2 += 1;
        }
        else {
            this.votosBrancos += 1;
        }
    }
    resultado() {
        console.log("┌────────────────────────────────────┐");
        console.log("│ Eleição                            │");
        console.log("│────────────────────────────────────│");
        console.log("│ Votos brancos: " + this.votosBrancos);
        console.log("│ Votos Candidato 1: " + this.votosCandidato1);
        console.log("│ Votos Candidato 2: " + this.votosCandidato2);
        console.log("└────────────────────────────────────┘");
    }
}
let eleicao = new Eleicao();
for (let i = 1; i <= 20; i++) {
    eleicao.votar(nomorAcak(0, 4));
}
eleicao.resultado();
