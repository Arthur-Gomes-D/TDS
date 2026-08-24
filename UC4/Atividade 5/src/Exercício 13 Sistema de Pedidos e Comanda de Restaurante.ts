class ItemMenu {
    protected _codigo: number
    protected _nome: string
    protected _precoBase: number
    constructor(codigo: number, nome: string, precoBase: number) {
        this._codigo = codigo
        this._nome = nome
        this._precoBase = precoBase
    }
    get nome():string{
        return this._nome
    }
    getPreco(): number {
        return this._precoBase
    }
}
class PratoPrincipal extends ItemMenu {
    constructor(codigo: number, nome: string, precoBase: number) {
        super(codigo, nome, precoBase)
    }
    override getPreco(): number {
        return this._precoBase
    }
}
class Bebida extends ItemMenu {
    private _taxaRefrigeracao: number
    constructor(codigo: number, nome: string, precoBase: number, taxa: number) {
        super(codigo, nome, precoBase)
        this._taxaRefrigeracao = taxa
    }
    override getPreco(): number {
        return this._precoBase + this._taxaRefrigeracao
    }
}
class Comanda{
    private _numeroMesa:number
    private _itens:ItemMenu[]
    constructor(numeroMesa:number){
        this._numeroMesa = numeroMesa
        this._itens = []
    }
    adicionarItem(item: ItemMenu):void{
        this._itens.push(item)
        console.log("Item adicionado a os pedidos");
    }
    calcularTotal(): number{
        return this._itens.reduce(
            (accumulator, currentValue) => accumulator + currentValue.getPreco() , 0
        )
    }
    gerarExtrato():void{
        console.log("+================");
        console.log(`| Mesa: ${this._numeroMesa}`);
        console.log("+================");
        for (const item of this._itens) {
            console.log(`| ${item.nome}   R$${item.getPreco()}`);
        }
        console.log("+================");
        console.log(`| Total: R$${this.calcularTotal()}`);
        console.log("+================");
    }
}
let pratos = [new PratoPrincipal(1, "Bife", 52), new PratoPrincipal(2, "Bakso", 62)]
let bebidas = [new Bebida(1, "Água", 10, 0), new Bebida(2, "Refri", 18.99, 5)]
let coman = new Comanda(1)
coman.adicionarItem(pratos[0])
coman.adicionarItem(pratos[1])
coman.adicionarItem(bebidas[0])
coman.gerarExtrato()