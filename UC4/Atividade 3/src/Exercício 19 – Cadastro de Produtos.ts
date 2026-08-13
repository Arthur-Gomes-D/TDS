class Mercado {
    produtos:string[]
    constructor(produto1:string, produto2:string, produto3:string, produto4:string, produto5:string){
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