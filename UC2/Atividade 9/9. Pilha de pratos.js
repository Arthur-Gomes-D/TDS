
let pratos = []

pratos.push("Prato 1" ,"Prato 2" ,"Prato 3" ,"Prato 4" ,"Prato 5")
console.log(`pratos antes da remoção: ${pratos}`);
console.log(`Prato removido: ${pratos[pratos.length-1]}`);
pratos.pop()
console.log(`Pratos restantes: ${pratos}`);
