"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    email;
    _senha;
    constructor(email, senha) {
        this.email = email;
        this._senha = senha;
    }
    set senha(novaSenha) {
        if (novaSenha.length < 8) {
            throw new Error("senha muito pequena");
        }
        else {
            this._senha = novaSenha;
        }
    }
    autendicar(senhaDigirada) {
        if (senhaDigirada == this._senha) {
            return true;
        }
        else {
            return false;
        }
    }
}
let novoUsuario = new Usuario("123@gmail.com", "12345678");
novoUsuario.senha = "aaaaaaaa";
try {
    novoUsuario.senha = "aaaaaa";
}
catch (error) {
    console.log("senha curta");
}
console.log(novoUsuario.autendicar("aaaaaaaa"));
console.log(novoUsuario.autendicar("aa1aaaaa"));
