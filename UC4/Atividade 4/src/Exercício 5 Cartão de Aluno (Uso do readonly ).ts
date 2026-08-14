class CartaoEstudante{
    readonly matricula:string
    private _nome:string
    private _saldoAlimentacao:number
    constructor(matricula:string, nome:string, saldoAlimentacao:number){
        this.matricula = matricula
        this._nome = nome
        this._saldoAlimentacao = saldoAlimentacao
    }
    set nome(novoNome:string){
        this._nome = novoNome
    }
    get nome():string {
        return this._nome
    }

    adicionarSaldo(valor:number){
        this._saldoAlimentacao += valor
    }
}

const estudante = new CartaoEstudante("dka43fsHFSUN", "Nome", 100);

console.log(estudante.matricula);
console.log(estudante.nome);
estudante.nome = "nome novo"
console.log(estudante.nome);
