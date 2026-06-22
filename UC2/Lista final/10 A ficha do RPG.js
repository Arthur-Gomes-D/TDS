let personagem = {
    nome: "Aragorn",
    classe: "Guerreiro",
    forca: 18,
    magia: 6,
    vida: 120
}
console.log(`"${personagem.nome} é um ${personagem.classe} com ${personagem.vida} de vida."`);
let poder_total = personagem.forca+personagem.magia
if (poder_total > 20) {
    console.log("Personagem lendário!");
}else{
    console.log("Personagem iniciante.");
    
}