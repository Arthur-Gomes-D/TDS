class Funcionario {
    private _nome: string
    private _salarioBase: number
    private _descontos: number
    constructor(nome: string, salarioBase: number, desconto: number) {
        this._nome = nome
        this._salarioBase = salarioBase
        this._descontos = desconto
    }
    public getSalarioLiquido(): number {
        return this._salarioBase - this._descontos
    }

    public get nome(): string {
        return this._nome
    }

    public set nome(novoNome: string) {
        this.nome = novoNome
    }
    public get salario(): number {
        return this._salarioBase
    }

    public set salario(novo: number) {
        if (novo <= 0) {
            throw new Error('salario invalido');
        } else {
            this._salarioBase = novo
        }
    }

    public set desconto(novo: number) {
        if (novo <= 0) {
            throw new Error('salario invalido');
        } else {
            this._descontos = novo
        }
    }

    public get desconto():number{
        return this._descontos
    }
}
let joaoTesta = new Funcionario("João Testa", 2500, 50)
let joaoTesta1 = new Funcionario("João Testa1", 2800, 50)
let joaoTesta2 = new Funcionario("João Testa2", 3200, 50)

class FolhaPagamento {
    private funcionarios:Funcionario[]
    constructor(){
        this.funcionarios = []
    }
    
    public adicionarFuncionarios(funcionario:Funcionario):void{
        this.funcionarios.push(funcionario)
    }
    public calcularCustoTotal():number{
        let total:number = 0
        for (const funcionario of this.funcionarios) {
            total += funcionario.getSalarioLiquido()
        }
        return total
    }
}
let folhaPagamento = new FolhaPagamento()

folhaPagamento.adicionarFuncionarios(joaoTesta)
folhaPagamento.adicionarFuncionarios(joaoTesta1)
folhaPagamento.adicionarFuncionarios(joaoTesta2)

console.log(folhaPagamento.calcularCustoTotal());
