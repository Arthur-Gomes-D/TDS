class Produto {
    public nome:string
    private _preco:number
    constructor(nome:string, preco:number){
        this.nome = nome
        this._preco = preco
    }
    set preco(novoPreco:number){
        if (novoPreco <= 0) {
            throw new Error('preço invalido');
        }else{
            this._preco = novoPreco
        }
    }
    get preco():number {
        return this._preco
    }
}

let produtos = [new Produto("maçã", 100)]

console.log(produtos[0].preco);
produtos[0].preco = 10;
console.log(produtos[0].preco);
produtos[0].preco = -10;
