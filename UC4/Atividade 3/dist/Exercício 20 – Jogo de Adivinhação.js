"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jogo {
    constructor() {
        this.numeroSecreto = 7;
    }
    jogar(num) {
        if (num == this.numeroSecreto) {
            console.log("╒═══════════════════════════╕");
            console.log("│ Parabéns!! você acertou!! │");
            console.log("│───────────────────────────│");
            console.log(`│ O número era ${this.numeroSecreto}            │`);
            console.log("╘═══════════════════════════╛");
        }
        else {
            console.log("╒══════════════════════════════╕");
            console.log("│ ERROU!! continue tentando... │");
            console.log("╘══════════════════════════════╛");
        }
    }
}
let jogoAdivinha = new Jogo();
jogoAdivinha.jogar(1);
jogoAdivinha.jogar(7);
jogoAdivinha.jogar(4);
