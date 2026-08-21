class Veiculo {
    public marca:string
    public modelo:string
    private _velocidade:number
    constructor(marca:string, modelo:string, velocidade:number){
        this.marca = marca
        this.modelo = modelo
        this._velocidade = velocidade
    }
    acelerar(incremento:number):void{
        this._velocidade += incremento
    }
    get velocidade():number{
        return this._velocidade
    }
}

class Moto extends Veiculo{
}