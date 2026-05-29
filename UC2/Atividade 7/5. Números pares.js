

const prompt = require("prompt-sync")();

let num = 0
let running = true
let i = 0

while (running) {
    num = +prompt("Escreva um número: ")    
    if (!isNaN(num) && (num >= 0)) {
        
        while (i <= num) {
            if (i % 2 == 0) {
                console.log(i);
            }

            i++
        }

        running = false
    }else{
        console.log("Coloque um caracter valido e que seja mais que 0!");
        
    }
}

