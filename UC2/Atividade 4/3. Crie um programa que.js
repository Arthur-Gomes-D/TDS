
const prompt = require('prompt-sync')();

const nomor_a = Number(prompt("mengetik sebuah nomor "))
const nomor_b = Number(prompt("mengetik nomor lain "))

let jumlah = nomor_a + nomor_b

console.log(`${nomor_a} + ${nomor_b} =  ` + jumlah);
