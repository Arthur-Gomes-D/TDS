

const promt = require("prompt-sync")();

let berjalan = true
let nomor = NaN

while (berjalan) {
    nomor = +promt("Digite um número: ")

    if (!isNaN(nomor)) {

        for (let i = 0; i != (nomor + 1); i++){
            
            if (i % 2 != 0) {
                console.log(i);
                
            }
        }

        berjalan = false
    } else {
        console.log("Digite um número valido!");

    }
}

