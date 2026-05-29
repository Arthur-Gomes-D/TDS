


const prompt = require("prompt-sync")()

const peso = prompt("peso: ")
const altura = prompt("altura: ")

const imc = peso / (altura*altura)

console.log(imc);
