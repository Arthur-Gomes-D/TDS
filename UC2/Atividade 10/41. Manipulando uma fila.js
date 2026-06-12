let fila = ["Ana", "Bruno", "Carlos"];

fila.push("Daniela");
fila.unshift("Prioridade");

console.log(fila);

fila.shift();

let atendido = fila.splice(0,1);
console.log(atendido);
console.log(fila);
