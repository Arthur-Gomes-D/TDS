

const input = require("prompt-sync")();

const anos = parseInt(input("Quantos anos você trabalha: "))
const salario = parseFloat(input("qual seu salário: "))

console.log(`você trabalha por ${anos} e ganha um salário de ${salario}`);
