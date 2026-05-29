

const prompt = require("prompt-sync")();

const num_tabuada = +prompt("Tabuada: ")
let i = 0

while (i != 11) {
    console.log(`${num_tabuada} x ${i} = ${num_tabuada * i}`);
    i++
    
}