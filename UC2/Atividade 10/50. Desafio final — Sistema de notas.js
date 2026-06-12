let notas = [5, 7, 8, 4, 10, 6, 3, 9];

notas.push(10)
notas.unshift(7)
notas.pop()
notas.shift()
notas.includes(10);
notas.indexOf(4)
notasMaisUm = notas.map(nota => nota + 1);
aprovadas = notas.filter(nota => nota >= 7);
menosQ5 = notas.find(nota => nota < 5);
console.log(notasMaisUm);
console.log(aprovadas);
console.log(menosQ5);
console.log(notas.slice(0,2));
console.log(notas.splice(3, 1));