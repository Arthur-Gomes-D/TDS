

const input = require("prompt-sync")();

let num1 = +input("Type a number: ")
let num2 = +input("Type another one: ")

let operator = input("Type an operator: ")

switch (operator) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "-":
        
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "*":
        
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/":
        
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        break;
}

