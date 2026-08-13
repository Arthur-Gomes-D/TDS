"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tabuada {
    constructor(numero) {
        this.numero = numero;
    }
    calcular() {
        console.log("┌<Tabuada>──────┐");
        for (let i = 0; i <= 10; i++) {
            if (i < 10) {
                console.log(`│ 0${i} x ${this.numero} = ${i * this.numero}`);
            }
            else {
                console.log(`│ ${i} x ${this.numero} = ${i * this.numero}`);
            }
        }
        console.log("└───────────────┘");
    }
}
let tabuada5 = new Tabuada(5);
tabuada5.calcular();
