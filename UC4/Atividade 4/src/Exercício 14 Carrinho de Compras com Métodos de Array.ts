class Item {
    public nome:string
    public preco:number
    constructor(nome:string, preco:number){
        this.nome = nome
        this.preco = preco
    }
}
class CarrinhoDeCompras {
    private itens:any[]
    constructor(){
        this.itens = []
    }
    public adicionarItem(item:Item): void{
        this.itens.push(item)
        console.log(item.nome, "adicionado ao carrinho");
    }
    public calcularTotal():number{
        let total:number = 0
        for (const item of this.itens) {
                total += item.preco
        }
        return total
    }
    public filtrarItensAcimaDe (valorMinimo:number):Item[]{
        return this.itens.filter((item) => item.preco >= valorMinimo)
    }
}

let produtos:any[] = [new Item("maçã", 12.59), new Item("banana", 6.99), new Item("limão", 10.25)]

let carrinho = new CarrinhoDeCompras()
carrinho.adicionarItem(produtos[0])
carrinho.adicionarItem(produtos[2])
carrinho.adicionarItem(produtos[1])
carrinho.adicionarItem(produtos[1])
carrinho.adicionarItem(produtos[2])
carrinho.adicionarItem(produtos[0])

console.log("O valor total da compra é", carrinho.calcularTotal(), "R$");


for (const itens of carrinho.filtrarItensAcimaDe(10)) {
    console.log("produto: "+itens.nome);
    console.log("preço: "+itens.preco);
    
}