
const input = require("prompt-sync")();

const usuario = input("Usuário: ")
const senha = input("Senha: ")
let nivelDeAcesso = 0

if (usuario == "Usuario" && senha == "1234") {
    nivelDeAcesso = 1
}else if (usuario == "Moderador" && senha == "1234") {
    nivelDeAcesso = 2
}else if (usuario == "Administrador" && senha == "1234") {
    nivelDeAcesso = 3
}else{
    console.log("Senha ou usuário estão incorretas");
    
}

switch (nivelDeAcesso) {
    case 1:
        console.log("você o nivel de Usuário comum");
        break;
    case 2:
        console.log("você o nivel de Moderador");
        break;
    case 3:
        console.log("você o nivel de Administrador");
        break;
    default:
        break;
}

