

const prompt = require("prompt-sync")();

let running = true

let num = NaN

let solution = 0

let sumSolutions = 0

while (running) {
    num = +prompt("Digite um número: ")
    
    if (!isNaN(num)) {
        for (let i = 0; i != 11; i++){
            solution = num * i
            sumSolutions += solution
            
            console.log(`${num} x ${i} = ${solution}`);
            
            if (i == 10) {
                console.log("Soma dos resultados: " + sumSolutions);
                console.log("Fim do programa");
                
            }
        }
        running = false
    }else{
    console.log("Digite um número valido");
    
    }
}

