class Produto {
    public nome:string
    protected _preco:number
    constructor(nome:string, preco:number){
        this.nome = nome
        this._preco = preco
    }
    getPrecoFinal():number{
        return this._preco
    }
}
class ProdutoImportado extends Produto{
    private _taxaAlfandega:number
    constructor(nome:string, preco:number, taxaAlfandega:number){
        super(nome, preco)
        this._taxaAlfandega = taxaAlfandega
    }
    override getPrecoFinal():number{
        const porcentagem = (this._taxaAlfandega/100)*this._preco
        return this._preco+porcentagem
    }
}
let amondega = new Produto("almôndega", 10)
let amondegaSueca = new ProdutoImportado("almôndega sueca", 50, 15)
console.log(`Preço de ${amondega.nome} é R$${amondega.getPrecoFinal()}`);
console.log(`Preço de ${amondegaSueca.nome} é R$${amondegaSueca.getPrecoFinal()}`);
