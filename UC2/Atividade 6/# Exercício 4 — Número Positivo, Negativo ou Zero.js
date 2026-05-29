

const input = require("prompt-sync")();

let nomor = +input("Mengetik sesuatu nomor: ")

if (nomor > 0) {
    console.log("nomor ini positif");
} else if (nomor < 0) {
    console.log("nomor ini negatif");
}else{
    console.log("nomor ini nol");
}

