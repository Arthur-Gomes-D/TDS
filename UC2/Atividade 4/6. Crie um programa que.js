
const prompt = require('prompt-sync')();

let nama = prompt("mengetik namamu: ")
let nilai_satu = parseInt(prompt("mengetik nilai yang pertama: ")) 
let nilai_dua = parseInt(prompt("mengetik nilai yang kedua: "))

console.log(`Anda siswa bernama ${nama}, dan nilai rata-rata kamu ${(nilai_satu + nilai_dua) / 2}`);
