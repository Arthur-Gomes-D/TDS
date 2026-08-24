export class Veiculo {
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
export class Moto extends Veiculo{
    private _cilindradas:number
    constructor(marca:string, modelo:string, cilindradas:number) {
        super(marca, modelo, 0)
        this._cilindradas = cilindradas
    }
    empinar():void{
        if (this.velocidade <= 0) {
            console.log("Não poderá empinar");
        }else{
            console.log("Empinando..");
            
        }
    }
}