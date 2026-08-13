"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    somar(num1, num2) {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }
}
let calculadora = new Calculadora();
calculadora.somar(5, 5);
