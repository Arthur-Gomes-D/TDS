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

class Diretor extends Funcionario {
    private _participacaoLucros:number
    constructor(nome:string, salarioBase:number, participacaoLucros:number){
        super(nome, salarioBase)
        this._participacaoLucros = participacaoLucros
    }
    override calcularSalarioFinal():number{
        return super.calcularSalarioFinal() + this._participacaoLucros
    }
}

class Empresa {
    private funcionarios: Funcionario[]
    constructor(){
        this.funcionarios = []
    }
    adicionarFuncionario(f:Funcionario):void{
        this.funcionarios.push(f)
        console.log("Funcionario adicionado");
    }
    calcularFolhaTotal(): number{
        let total = 0
        for (const funcionario of this.funcionarios) {
            total += funcionario.calcularSalarioFinal()
        }
        return total
    }
}
const diret = new Diretor("A", 12500, 500);
console.log(diret.calcularSalarioFinal());
let emp = new Empresa()
let funcionarios = [new Funcionario("jdsa", 1321), new Funcionario("jdsa", 2320)]
emp.adicionarFuncionario(funcionarios[0])
emp.adicionarFuncionario(funcionarios[1])
emp.adicionarFuncionario(diret)
console.log(emp.calcularFolhaTotal());
