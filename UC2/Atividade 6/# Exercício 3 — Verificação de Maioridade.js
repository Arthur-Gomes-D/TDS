

const input = require("prompt-sync")();

let umur = +input("mengetik umurmu: ")
let dewasa = false

if (umur >= 18) {
    dewasa = true   
}
switch (dewasa) {
    case true:
        console.log("Anda orang dewasa");
        break;

    default:
        console.log("Anda anak");
        break;
        
}

