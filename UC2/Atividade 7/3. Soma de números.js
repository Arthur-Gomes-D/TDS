
const prompt = require("prompt-sync")();

let running = true
let numInt = 0
let finalNum = 0

while (running) {
    numInt = parseInt(prompt("Escreva um número inteiro: "))
    
    if (!isNaN(numInt)) {

        while (numInt != 0) {

            finalNum = finalNum + numInt

            console.log(numInt);

            if (numInt == 1) {
                console.log("=");
                console.log(finalNum);
                
            }else{
                console.log("+");
                
            }

            numInt--
            
        }
        running = false;
    } else{
        console.log("escreva um número!");
    }
}