let numeros = [32, 9, 504, 4]
let dobro = numeros.map(numero => numero*2);
let maisQ10 = numeros.filter(numero => numero >= 10)
let maisQ20 = numeros.find(numero => numero > 20)

console.log(dobro);
console.log(maisQ10);
console.log(maisQ20);

