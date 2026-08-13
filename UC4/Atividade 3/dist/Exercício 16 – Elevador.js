"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Elevador {
    constructor() {
        this.andarAtual = 0;
    }
    subir() {
        if (this.andarAtual < 10) {
            console.log("┌───────────────┐");
            console.log("│ Subindo ...   │");
            console.log("├───────────────┤");
            this.andarAtual += 1;
            if (this.andarAtual == 10) {
                console.log("│ Andar atual:" + this.andarAtual + "│");
            }
            else {
                console.log("│ Andar atual:" + this.andarAtual + " │");
            }
            console.log("└───────────────┘");
        }
        else {
            console.log("┌<!>─────────<!>┐");
            console.log("│    ERRO!!     │");
            console.log("│───────────────└─────────────────<!>┐");
            console.log("│ Não é possivel subir mais!!        │");
            console.log("└<!>──────────────────────────────<!>┘");
        }
    }
    descer() {
        if (this.andarAtual > 0) {
            console.log("┌───────────────┐");
            console.log("│ Descendo ...  │");
            console.log("├───────────────┤");
            this.andarAtual += 1;
            console.log("│ Andar atual:" + this.andarAtual + " │");
            console.log("└───────────────┘");
        }
        else {
            console.log("╭<!>─────────<!>╮");
            console.log("│    ERRO!!     │");
            console.log("│───────────────╰─────────────────<!>╮");
            console.log("│ Não é possivel descer mais!!       │");
            console.log("╰<!>──────────────────────────────<!>╯");
        }
    }
}
let elevador = new Elevador();
elevador.subir();
elevador.subir();
elevador.subir();
elevador.descer();
elevador.descer();
elevador.descer();
