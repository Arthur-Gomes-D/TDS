
const prompt = require("prompt-sync")();

const senhaCorreta = "1234"

let senha = ""

while (senha != senhaCorreta) {

    senha = prompt("Senha: ")

    if (senha === senhaCorreta) {
        console.log("Acesso permitido.");
    } else{
        console.log("Senha incorreta!");
    }
}
