"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Termostato {
    _temperaturaCelsius;
    constructor(temperatura) {
        this._temperaturaCelsius = temperatura;
    }
    get temperatura() {
        return this._temperaturaCelsius;
    }
    set temperatura(num) {
        if (this._temperaturaCelsius >= -50 && this.temperatura <= 100) {
            this._temperaturaCelsius = num;
        }
        else {
            throw new Error("alto ou baixo demais");
        }
    }
    getTemperaturaFahrenheit() {
        return this._temperaturaCelsius * 1.8 + 32;
    }
}
let termostato = new Termostato(50);
console.log(termostato.temperatura);
console.log(termostato.getTemperaturaFahrenheit());
console.log(termostato.temperatura = 80);
console.log(termostato.temperatura);
console.log(termostato.getTemperaturaFahrenheit());
