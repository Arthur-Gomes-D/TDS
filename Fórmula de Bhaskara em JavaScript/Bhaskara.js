const prompt = require("prompt-sync")();


let a = +prompt("Escreva o A: ")
let b = +prompt("Escreva o B: ")
let c = +prompt("Escreva o C: ")

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

let delta = b**2 - 4 * a * c 

if(isNaN(delta)){
    console.log("Verifique os valores inseridos");

}else if (delta < 0) {
    console.log(`Delta: ${delta}`);
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log("Não existe");
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    
} else{
    console.log(`Delta: ${delta}`);
    b = b - (b*2)
    
    let raiz = Math.sqrt(delta)

    let b_mais = b + raiz
    let b_menos =  b - raiz
    
    let bMaSubString = `${b_mais/(2*a)}`
    let bMiSubString = `${b_menos/(2*a)}`

    console.log(`x1: ${bMaSubString.substring(0,6)}`);
    console.log(`x2: ${bMiSubString.substring(0,6)}`);
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
}