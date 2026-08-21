"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cofre {
    segredo;
    aberto;
    tentativasFalhas;
    constructor() {
        this.segredo = "1a2b3c";
        this.aberto = false;
        this.tentativasFalhas = 0;
    }
    abrir(segredoDigitado) {
        if (this.tentativasFalhas < 3) {
            if (segredoDigitado == this.segredo) {
                this.aberto = true;
            }
            else {
                this.tentativasFalhas += 1;
                console.log(this.tentativasFalhas);
            }
        }
        else {
            throw new Error("maxima atingida");
        }
        if (this.aberto) {
            console.log("cofre aberto");
        }
    }
}
let cof = new Cofre();
cof.abrir("dsadfas");
cof.abrir("dsadfas");
cof.abrir("1a2b3c");
try {
    cof.abrir("dsadfas");
}
catch (error) {
    console.log("tentativa maxima atingida");
}
