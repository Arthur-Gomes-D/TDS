

const input = require("prompt-sync")();

let nilai = +input("Mengetik sebuah nilai, dalam 0 ke 10: ")

if (nilai >= 0 && nilai <= 10) {
    if (nilai >= 7) {
        console.log("Aprovado");
    } else if (nilai >= 5) {
        console.log("Recuperação");
    } else if (nilai < 5) {
        console.log("Reprovado");
    }
} else {
    console.log("nilai harus adalah nomor dalam 0 ke 10");
}

