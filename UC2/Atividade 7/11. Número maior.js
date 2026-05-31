
const promt = require("prompt-sync")();

let i = 1;
let num = NaN;
let biggestNum = Number.NEGATIVE_INFINITY;

while (i != 6) {
    pastNum = num
    num = +promt(`Digite o ${i}º número: `);

    if (num > biggestNum) {
        biggestNum = num   
    }
    i++ 
}
console.log(`Menor número: ${biggestNum}`);

