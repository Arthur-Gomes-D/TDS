

const prompt = require("prompt-sync")();

let running = true

let num = NaN

while (running) {
    num = +prompt("Digite um número: ")
    
    if (!isNaN(num)) {
        for (let i = 0; i != 11; i++){
            console.log(`${num} x ${i} = ${num * i}`);
        }
        running = false
    }else{
    console.log("Digite um número valido");
    
    }
}

