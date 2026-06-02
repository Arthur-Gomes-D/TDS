

const promt = require("prompt-sync")();

let rodando = true
let num = NaN
let somaPares = 0

while (rodando) {
    num = +promt("Digite um número: ")

    if (!isNaN(num) && num >= 0) {

        for (let i = 0; i != (num + 2); i++) {

            if (i % 2 == 0) {
                console.log(i);
                somaPares += i

                if (i == num) {
                    console.log("=");
                    console.log(somaPares);
                } else {
                    console.log("+");
                }
            }

        }
        rodando = false
    } else {
        console.log("Digite um número valido!");

    }
}

