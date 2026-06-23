function comprarCafe(tamanho) {
    if (tamanho > 0 && tamanho <= 3) {
        let precoFinal = 1.50
        for (let i = 0; i <= tamanho - 1; i++) {
            precoFinal += 1.50
        }
        return console.log("preço do café R$",precoFinal)
    } else {
        return console.log("tamanho invalido");
    }
}
comprarCafe(1)
comprarCafe(3)
comprarCafe(2)
comprarCafe(10)