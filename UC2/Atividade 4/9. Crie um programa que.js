

const prompt = require('prompt-sync')(); 

let celsius = parseFloat(prompt("Escreva uma temperatura em Celsius: "))

let fahrenheit = (celsius * 9/5) + 32

console.log(`${celsius} celsius é ${fahrenheit} em fahrenheit`);
