

const input = require("prompt-sync")()

const num1 = Number(input("escreva um numéro: "))
const num2 = Number(input("escreva mais um numéro: "))
const num3 = Number(input("escreva mais outro numéro: "))

const media = (num1+num2+num3)/3

console.log("a média é " + media);
