
const promt = require("prompt-sync")();

let runinng = true
let quantidadeNotas = 0
let nota = 0
let notas = 0
let i = 0
let media = 0

while (runinng) {
    quantidadeNotas = +promt("Quantidade de notas: ")

    i = quantidadeNotas

    while (i != 0) {
        nota = +promt(`digite sua ${i}ª nota: `)
        notas = notas + nota

        if (i == 1) {
            media = notas / quantidadeNotas

            console.log(`Sua média é ${media}`);
            runinng = false
        }

        i--
    }
}