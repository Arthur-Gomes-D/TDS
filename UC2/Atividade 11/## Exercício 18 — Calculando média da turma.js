const alunos = [
    {
        nome: "Hammond",
        nota: 7
    },
    {
        nome: "Ervin",
        nota: 5
    },
    {
        nome: "Claudinho",
        nota: 8
    },
    {
        nome: "Senga",
        nota: 7
    }
]

let notas = 0

for (let chave in alunos){
    notas += alunos[chave].nota
}
media = notas/alunos.length

console.log("Media: "+ media);
