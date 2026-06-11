let notas = [4, 6, 7, 8, 9, 5];

let aprovadas = notas.filter(nota => nota >= 7);
let reporvadas = notas.find(nota => nota < 6);

let extra = notas.map(nota => nota+1)

console.log(notas);
console.log(aprovadas);
console.log(reporvadas);
console.log(extra);
