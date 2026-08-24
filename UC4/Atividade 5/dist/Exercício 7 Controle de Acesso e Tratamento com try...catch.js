"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    _email;
    _senha;
    constructor(email, senha) {
        this._email = email;
        this._senha = senha;
    }
    login(email, senha) {
        if (email == this._email && senha == this._senha) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Administrador extends Usuario {
    nivelAcesso;
    constructor(email, senha, nivelAcesso) {
        super(email, senha);
        this.nivelAcesso = nivelAcesso;
    }
    deletarUsuario(usuario) {
        if ("nivelAcesso" in usuario) {
            throw new Error("Administradores não podem ser deletados");
        }
        else {
            console.log("usuario deletado!");
        }
    }
}
let usuario1 = new Usuario("email123@email.com", "123123");
if (usuario1.login("email123@email.com", "123123")) {
    console.log("Logado com sucesso");
}
else {
    console.log("email ou senha incorretos");
}
if (usuario1.login("email123@email.com", "12323")) {
    console.log("Logado com sucesso");
}
else {
    console.log("email ou senha incorretos");
}
let admin123 = new Administrador("adim123@gmail.com", "123", 1);
admin123.deletarUsuario(usuario1);
try {
    admin123.deletarUsuario(admin123);
}
catch (error) {
    console.log("impossivel deletar adms");
}
