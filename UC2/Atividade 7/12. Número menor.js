
const promt = require("prompt-sync")();

let i = 1;
let num = NaN;
let smallestNum = Number.POSITIVE_INFINITY;

while (i != 6) {
    pastNum = num
    num = +promt(`Digite o ${i}º número: `);

    if (num < smallestNum) {
        smallestNum = num   
    }
    i++ 
}
console.log(`Menor número: ${smallestNum}`);

