
const gets = require("prompt-sync")();

let = resposta = 0
let = pontos = 0
for (let i = 1; i <= 5; i++) {
    switch (i) {
        case 1:
            resposta = +gets("Quanto é 2 + 2? ")
            if (resposta == (2 + 2)) {
                pontos += 1
            }
            break;
        case 2:
            resposta = +gets("Quanto é 5 * 3? ")
            if (resposta == (5 * 3)) {
                pontos += 1
            }
            break;
        case 3:
            resposta = +gets("Quanto é 10 - 4? ")
            if (resposta == (10 - 4)) {
                pontos += 1
            }
            break;
        case 4:
            resposta = +gets("Quanto é 20 / 5? ")
            if (resposta == (20 / 5)) {
                pontos += 1
            }
            break;
        case 5:
            resposta = +gets("Quanto é 7 + 8? ")
            if (resposta == (7 + 8)) {
                pontos += 1
            }
            break;

        default:
            break;
    }
    if (i == 5) {
        console.log(`Você acertou ${pontos} de 5 perguntas.`);
    }

}