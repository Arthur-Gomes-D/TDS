class Transacao {
    public tipo: 'DEPOSITO' | 'SAQUE'
    public valor: number
    public data: Date
    constructor(tipo: 'DEPOSITO' | 'SAQUE', valor: number, data: Date) {
        this.tipo = tipo
        this.valor = valor
        this.data = data
    }
}
class ContaCorrenteComExtrato {
    private _saldo: number
    private _historico: Transacao[]
    constructor() {
        this._saldo = 0
        this._historico = []
    }
    public depositar(dinheiro: number):void {
        this._saldo += dinheiro
        this._historico.push(new Transacao('DEPOSITO', dinheiro, new Date()))
        console.log("Valor depoistado: " + dinheiro);
        console.log("Saldo: " + this._saldo);

    }
    public sacar(dinheiro:number):void{
        if (dinheiro > this._saldo) {
            console.log("Dinheiro muito alto");
        } else{
            this._saldo -= dinheiro
            this._historico.push(new Transacao('SAQUE', dinheiro, new Date()))
        }
    }
    public gerarExtrato():void {
        console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        this._historico.forEach((his) => console.log(`TIPO: ${his.tipo}\nVALOR: ${his.valor}\nDATA: ${his.data}`))
        console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");

    }
}
let conta = new ContaCorrenteComExtrato()
conta.depositar(1000)
conta.sacar(10)
conta.gerarExtrato()