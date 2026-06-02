
const promt = require("prompt-sync")();

let num = NaN;
let smallestNum = Number.POSITIVE_INFINITY;

for (let i = 1; i != 6; i++) {
    pastNum = num
    num = +promt(`Digite o ${i}º número: `);
    
    if (num < smallestNum) {
        smallestNum = num   
    }
}
console.log(`Menor número: ${smallestNum}`);

