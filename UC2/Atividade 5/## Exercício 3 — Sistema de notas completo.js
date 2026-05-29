

let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
let frequencia = 80;

let media = (nota1 + nota2 + nota3) / 3

if (frequencia < 75) {
    console.log("reprovado por falta");
} else {
    console.log("Sua média é de " + media);
    if (media >= 9) {
        console.log("logo você está Excelente");
    } else if (media >= 7 && media <= 8.9) {
        console.log("logo você está Aprovado");
    } else if (media >= 5 && media <= 6.9) {
        console.log("logo você está Recuperação");
    } else {
        console.log("logo você está Reprovado");
    }
}

