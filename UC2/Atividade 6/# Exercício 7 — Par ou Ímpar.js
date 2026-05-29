

const input = require("prompt-sync")();
let num = +input("Escreva um número: ")

if (num % 2 == 0) {
    console.log(`${num} é par`);   
} else{
    console.log(`${num} é ímpar`);
    
}

