

const prompt = require('prompt-sync')();

let salario = parseFloat(prompt('Salário do funcionário: '))
let bonus = parseFloat(prompt('bônus: '))

console.log(`o salário final é ${salario + bonus}`);
