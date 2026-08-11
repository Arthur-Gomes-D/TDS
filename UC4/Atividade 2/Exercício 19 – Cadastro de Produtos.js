class Mercado {
    constructor(produto1, produto2, produto3, produto4, produto5){
        this.produtos = [produto1, produto2, produto3, produto4, produto5]
    }

    listarProdutos(){
        for(let i = 0; i < this.produtos.length; i++){
            console.log("Produto: "+ this.produtos[i]);
            
        }
    }
}

let mercadoDoZe = new Mercado("Maçã", "Limão", "Laranja", "Abacaxi", "Abobora")

mercadoDoZe.listarProdutos()