let pets = [
    { nome: "Rex", porte: "grande" },
    { nome: "Mel", porte: "pequeno" },
    { nome: "Thor", porte: "grande" },
    { nome: "Bidu", porte: "medio" },
    { nome: "Nina", porte: "pequeno" }
];
let total = 0
function precoPorte(porte) {
    if (porte == "grande") {
        return 70
    } else if (porte == "pequeno") {
        return 45
    } else if (porte == "medio") {
        return 30
    }else{
        return null
    }
}

let maisCaro = pets[0]

for (let pet in pets){
    console.log(pets[pet].nome,": R$",precoPorte(pets[pet].porte));
    if (precoPorte(pets[pet].porte > precoPorte(maisCaro.porte))) {
        maisCaro = pets[pet]
    }
    total += precoPorte(pets[pet].porte)
}
console.log("==== Mais Caro ====");
console.log(maisCaro.nome,": R$ ",precoPorte(maisCaro.porte));
console.log("==== Total ====");
console.log("R$", total);
