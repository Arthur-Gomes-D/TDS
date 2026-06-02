
const promt = require("prompt-sync")();

let num = NaN;
let biggestNum = Number.NEGATIVE_INFINITY;

for (let i = 1; i != 6; i++) {
    pastNum = num
    num = +promt(`Digite o ${i}º número: `);
    
    if (num > biggestNum) {
        biggestNum = num   
    }
}
console.log(`Menor número: ${biggestNum}`);

