
const prompt = require('prompt-sync')();

let lebar = Number(prompt("mengetik persegi panjang lebernya: "))
let tinggi = Number(prompt("mengetik persegi panjang tinggi: "))

let persegi_panjang_luasnya = lebar * tinggi

console.log("persegi panjang ini luasnya adalah " + persegi_panjang_luasnya);
