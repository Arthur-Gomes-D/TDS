const prompt = require("prompt-sync")();

let usuarios = ["ana", "bruno", "carla", "daniel"];

let busca = prompt("busca: ")

if (!usuarios.includes(busca)) {
    usuarios.push(busca);
    console.log("Usuário(a) adicionado a lista.");
    console.log("lista: ");
    usuarios.forEach(usuario => console.log(usuarios.indexOf(usuario) + " " + usuario))
} else {
    console.log(`o(a) usuário(a) ${busca} está na lista na posição ${usuarios.indexOf(busca)}`);

}