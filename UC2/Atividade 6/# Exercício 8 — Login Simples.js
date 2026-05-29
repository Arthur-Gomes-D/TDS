

const input = require("prompt-sync")();

let Usuário = input("Usuário: ")
let Senha = input("Senha: ")

if (Usuário == "admin" && Senha == "1234") {
    console.log("logado!");
}else{
    console.log("Credencias incorretas");
}

