let fila = ["Ana", "Bruno", "Carla", "Diego", "Elaine"];


console.log("tem",fila.length,"pessoa(s)");
console.log(`o(a) primeiro(a) é ${fila[0]}, o(a) ultimo(a) é ${fila[fila.length-1]}`);
console.log(fila[0],"foi atendio(a)")
fila.shift();
console.log(fila);
console.log("chegou um cliente atrasado, o tal do Fábio");
fila.push("Fábio")
console.log(fila);
