"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    _nome;
    _idade;
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    set idade(num) {
        if (num <= 0) {
            throw new Error("num invalido");
        }
        else {
            this._idade = num;
        }
    }
    get idade() {
        return this._idade;
    }
    emitirSom() {
        return "Som genérico de animal";
    }
}
class Gato extends Animal {
    constructor(nome, idade) {
        super(nome, idade);
    }
    emitirSom() {
        return "Miau!";
    }
}
class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade);
    }
    emitirSom() {
        return "Au Au!";
    }
}
const gato = new Gato("O", 1);
const cao = new Cachorro("arguments", 2);
try {
    gato.idade = -1;
}
catch (error) {
    console.log("num invalido");
}
gato.idade += 1;
console.log(gato.idade);
console.log(gato.emitirSom());
console.log(cao.emitirSom());
