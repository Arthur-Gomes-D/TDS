class Cliente {
    private _email:string
    constructor(email:string){
        this._email = email
    }
    get email():string{
        return this._email
    }
    set email(novo:string){
        this._email = novo
    }
}
class Produto {
    public id:number
    public nome:string
    public preco:number
    public estoque:number
    constructor(id:number, nome:string, preco:number, estoque:number){
        this.id = id
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }
}
class Pedido {
    private _cliente:Cliente
    private _itens:Produto[]
    private _pago:boolean
    constructor(cliente:Cliente){
        this._cliente = cliente
        this._itens = []
        this._pago = false
    }
    adicionarProduto(produto:Produto):void{
        if (produto.estoque <= 0) {
            throw new Error("Não existe mais desse produto no estoque");
            
        }else{
        this._itens.push(produto)
        console.log(`produto ${produto.nome} foi adicionado a o carrinho`);
        }
    }
    finalizarPedio():void{
        let total = 0
        this._pago = true
        for (const item of this._itens) {
            total += item.preco
            item.estoque -= 1
        }
        console.log(`o total é ${total}R$`);
        
    }
}

let cliente1 = new Cliente("cliente1@gmail.com")
let produtos:Produto[] = [{id:1, nome:"maçã", preco:123, estoque:100}, {id:2, nome:"AAAA", preco:123, estoque:0}]
let pedidoNovo = new Pedido(cliente1)
pedidoNovo.adicionarProduto(produtos[0])
try {
    pedidoNovo.adicionarProduto(produtos[1])
} catch (error) {
    console.log("Produto não existe mais no estoque!");
    
}
pedidoNovo.finalizarPedio()