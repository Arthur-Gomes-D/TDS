

let idade = 18;
let acompanhante = true;
let ingresso = false;

if (ingresso) {
    if (idade < 18 && acompanhante) {
        console.log("Pode entrar");

    } else if (idade < 18 && !acompanhante) {
        console.log("Menores de idade precisam de um acompanhante para entrar");
    } else {
        console.log("Pode entrar");

    }
} else {
    console.log("precisa de ingresso para entrer");
}

