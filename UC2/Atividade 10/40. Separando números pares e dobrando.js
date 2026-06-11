let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

let pares = numeros.filter(numero => numero % 2 == 0)
let dobroPares =  pares.map(par => par * 2)

dobroPares.forEach(par => console.log(par))