let notas = [8, 7, 9];

function calcularMediaNotas(notas) {
    let acumulador = 0
    for(let i = 0; i <= (notas.length-1); i++){
        acumulador += notas[i]
    }
    return acumulador/notas.length
    
}

console.log(calcularMediaNotas(notas));
