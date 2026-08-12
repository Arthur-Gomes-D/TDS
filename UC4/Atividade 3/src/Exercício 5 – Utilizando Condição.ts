class Produto{
    nome:string
    quantidade:number
    constructor(nome:string, quantidade:number){
        this.nome = nome;
        this.quantidade = quantidade
    }
    verificarEstoque(){
        if (this.quantidade > 0) {
            console.log("Produto disponível");
            
        }else {
            console.log("Produto indisponível");
            
        }
    }
}

let produtos = [new Produto("Maçã", 5), new Produto("Limão", 0)]

produtos[0].verificarEstoque()
produtos[1].verificarEstoque()