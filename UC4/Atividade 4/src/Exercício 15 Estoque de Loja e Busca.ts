interface Produtos{
    id:number,
    nome:string,
    qtd:number
}
class Estoque {
    private produtos:Produtos[]
    constructor(){
        this.produtos = []
    }
    public adicionarProduto(id:number, nome: string, qtd: number):void{
        let idRepetido:boolean = false
        if (this.produtos.find((produto) => produto.id == id)) {
            idRepetido = true
            console.log("já existe um produto com esse id");
        }
        if (!idRepetido) {
            this.produtos.push({id:id, nome:nome, qtd:qtd})
        }
    }
    public atualizarQuantidade(id:number, novoQtd:number):void{
        for (const produto of this.produtos) {
            if (produto.id == id) {
                produto.qtd = novoQtd
                console.log(`quantidade de produto de ${id} foi atualizado para ${novoQtd}`);
            }
        }
    }
}
let meuEstoque = new Estoque
meuEstoque.adicionarProduto(1, "maçã", 5)
meuEstoque.adicionarProduto(1, "maçã", 5)
meuEstoque.atualizarQuantidade(1, 50)