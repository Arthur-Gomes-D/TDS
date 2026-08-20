interface Items {
    id:number
    nome:string
    preco:number
    qtd:number
}
class VendingMachine {
    private _saldoInserido:number
    private _estoque:Items[]
    constructor(){
        this._saldoInserido = 0
        this._estoque = [{id:1, nome:"Refri", preco:14.99, qtd:12}, {id:2, nome:"Refri 2", preco:16.99, qtd:12}, {id:3, nome:"Refri 3", preco:9.99, qtd:3}]
    }
    public inserirMoeda(valor: number): void{
        if (valor <= 0) {
            console.log("Valor invalido");
        }else {
            this._saldoInserido += valor
            console.log(`Valor inserido na maquina com sucesso, saldo atual ${this._saldoInserido}`);
        }
    }
    public comprarItem(id:number):void{
        const item = this._estoque.find((ite) => ite.id == id)
        if (item == undefined) {
            console.log("Item não encontrado");
        }else{
            if (item.qtd > 0 && this._saldoInserido >= item.preco) {
                console.log(`item ${item.nome} comprado por ${item.preco}`);                
            }else{
                console.log("sem saldo ou item fora de estoque");
            }
        }
    }
}

let mesinJual = new VendingMachine()

mesinJual.inserirMoeda(-1)
mesinJual.comprarItem(1)

mesinJual.inserirMoeda(100)
mesinJual.comprarItem(99)
mesinJual.comprarItem(1)