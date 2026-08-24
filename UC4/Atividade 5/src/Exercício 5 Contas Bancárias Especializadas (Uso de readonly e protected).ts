class Conta {
    public readonly numeroConta: number
    public titular: string
    protected _saldo: number
    constructor(numeroConta: number, titular: string) {
        this.numeroConta = numeroConta
        this.titular = titular
        this._saldo = 0
    }
    depositar(valor:number):void{
        if (valor <= 0) {
            throw new Error("Valor invalido");
        } else {
            this._saldo += valor
            console.log(`R$${valor} depositado\no saldo agora é R$${this._saldo}`);
            
        }
    }
    sacar(valor:number):void{
        if (valor > this._saldo) {
            throw new Error("Valor invalido");
        }else{
            this._saldo -= valor
            console.log(`R$${valor} sacado\no saldo agora é de R$${this._saldo}`);
            
        }
    }
}
class ContaPoupanca extends Conta{
    private _taxaRendimento:number
    constructor(numeroConta: number, titular: string, taxaRendimento:number){
        super(numeroConta, titular)
        this._taxaRendimento = taxaRendimento
    }
    renderJuros():void{
        this._saldo += this._taxaRendimento
        console.log("Redimento adicionado");
        console.log("Saldo: ", this._saldo);
        
    }
}

const conta123 = new ContaPoupanca(123, "Umdoistrês", 1.23)
try {
    conta123.depositar(-123)
} catch (error) {
    console.log("número negativo");
    
}
conta123.depositar(123)
try {
    conta123.sacar(1.23)
} catch (error) {
    console.log("número negativo");
    
}
conta123.sacar(1.23)
conta123.renderJuros()