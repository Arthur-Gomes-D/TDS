

const prompt = require("prompt-sync")();

let num = 0
let running = true
let nota = 0
let notas = 0
let quantidadeNotas = 0

while (running) {
    num = +prompt("Quantas notas deseja informar? ")
    if (!isNaN(num)) {
        for (let i = 1; i != (num + 1); i++){
            
            nota = +prompt(`Nota ${i}: `)
            notas += nota
            quantidadeNotas += 1
        }
        console.log(`Média: ${notas/quantidadeNotas}`);
        
        running = false
    }
}
