class Estoque {
    constructor(nomeProduto, quantidade) {
        this.nomeProduto = nomeProduto
        this.quantidade = parseInt(quantidade)
    }
    saidaProduto() {
        if (this.quantidade > 0) {
            console.log("┌────────────────────────────────────┐");
            console.log("│ Sucesso!                           │");
            console.log("│────────────────────────────────────│");
            console.log(`│ Produto: ${this.nomeProduto}`);
            console.log("│ Produto comprado                   │");
            console.log("└────────────────────────────────────┘");
            this.quantidade -= 1
        } else {
            console.log("┌<!><!><!>───────────────────────────┐");
            console.log("│ ERRO!                              │");
            console.log("│────────────────────────────────────│");
            console.log(`│ Produto: ${this.nomeProduto}`);
            console.log("│ não existe mais nenhuma copia des- │");
            console.log("│ se Produto no sistema.             │");
            console.log("└────────────────────────────────────┘");
        }
    }
    entradaProduto() {
        console.log("┌────────────────────────────────────┐");
        console.log("│ Sucesso!                           │");
        console.log("│────────────────────────────────────│");
        console.log(`│ Produto: ${this.nomeProduto}`);
        console.log("│ Produto adicionado com sucesso!    │");
        console.log("└────────────────────────────────────┘");
        this.quantidade += 1
    }
    consultar() {
        console.log("┌────────────────────────────────────┐");
        console.log(`│ Produto: ${this.nomeProduto}`);
        console.log("│────────────────────────────────────│");
        console.log(`│ quantidade: ${this.quantidade}`);
        console.log("└────────────────────────────────────┘");
    }
}

let maca = new Estoque("maçã", 2)

for (let i = 0; i <= 10; i++) {
    maca.saidaProduto()
    maca.saidaProduto()
    maca.entradaProduto()
    maca.entradaProduto()
    maca.entradaProduto()
}
maca.consultar()