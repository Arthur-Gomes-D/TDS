function calcularMedia(n1, n2){
    return (n1 + n2)/2
}
function verificarSituacao(media) {
    if (media >= 7) {
        console.log("Aprovado");
    }else{
        console.log("Reprovado");
    }
}
let media = calcularMedia(7,8)
verificarSituacao(media)