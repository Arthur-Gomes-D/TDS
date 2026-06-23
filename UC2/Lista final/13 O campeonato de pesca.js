const prompt = require("prompt-sync")();
let = peixes = [{}, {}, {}, {}, {}]
let pesoTotal = 0
for (let i = 0; i < 5; i++){
    peixes[i].nome = prompt(`Escreva o nome do ${i+1}º peixe: `)
    peixes[i].tamanho = +prompt(`Escreva o tamanho do ${i+1}º peixe: `)
    peixes[i].peso = +prompt(`Escreva o peso do ${i+1}º peixe: `)
}

let maiorPeixe = peixes[0]
let menorPeixe = peixes[0]

for(let i = 0; i < peixes.length; i++){

    if (peixes[i].tamanho > maiorPeixe.tamanho) {
        maiorPeixe = peixes[i]        
    }
    if (peixes[i].tamanho < menorPeixe.tamanho) {
        menorPeixe = peixes[i]        
    }
    pesoTotal += peixes[i].peso
}
console.log(`O maior peixe foi o ${maiorPeixe.nome} de ${maiorPeixe.tamanho} cm e ${maiorPeixe.peso} quilos`);
console.log(`O menor peixe foi o ${menorPeixe.nome} de ${menorPeixe.tamanho} cm e ${menorPeixe.peso} quilos`);
console.log("O peso de todos os peixes justos é", pesoTotal, "quilos");
