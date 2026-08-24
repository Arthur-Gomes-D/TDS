class Funcionario {
    protected _nome:string
    private _salarioBase:number
    constructor(nome:string, salarioBase:number){
        this._nome = nome
        this._salarioBase = salarioBase
    }
    get salario():number{
        return this._salarioBase
    }
    set salario(valor:number){
        if (valor <= 0) {
            throw new Error("Valor invalido");
        }else{
            this._salarioBase = this.salario
        }
    }
    calcularSalarioFinal():number{
        return this._salarioBase
    }
}
class Gerente extends Funcionario{
    private _bonusAdicional:number
    constructor(nome:string, salarioBase:number, bonusAdicional:number){
        super(nome, salarioBase)
        this._bonusAdicional = bonusAdicional
    }
    override calcularSalarioFinal():number{
        return super.calcularSalarioFinal() + this._bonusAdicional
    }

}
const benson = new Gerente("benson", 1500, 2);
try {
    benson.salario = -1
} catch (error) {
    console.log("negativo"); 
}
console.log(benson.calcularSalarioFinal());

