class Estoque {
    private produtos:Object[]
    constructor(){
        this.produtos = []
    }
    public adicionarProduto(id:number, nome: string, qtd: number):void{
        if (this.produtos.find((produto) => produto.id == id)) {
            
        }
    }
}