class DispositivoEletronico {
    public marca: string
    protected _nivelBateria: number
    constructor(marca: string, carga: number) {
        this.marca = marca
        if (carga >= 0 && carga <= 100) {
            this._nivelBateria = carga
        }else{
            throw new Error("Valor invalido de carga");
            
        }
    }
}
class Smartphone extends DispositivoEletronico{
    constructor(marca:string, carga:number){
        super(marca, carga)
    }
    usaraAplicatico(consumo:number):void{
        if (this._nivelBateria <= 0 || (this._nivelBateria - consumo) <= 0) {
            throw new Error("carga negativa");
        }else{
            this._nivelBateria -= consumo
            console.log(`carga %${this._nivelBateria}`);
            
        }
    }
}

const celular = new Smartphone("Nokia", 100);
celular.usaraAplicatico(1);
celular.usaraAplicatico(1);
celular.usaraAplicatico(1);
celular.usaraAplicatico(1);
celular.usaraAplicatico(1);
celular.usaraAplicatico(5);
celular.usaraAplicatico(5);
celular.usaraAplicatico(5);
celular.usaraAplicatico(5);
celular.usaraAplicatico(5);
celular.usaraAplicatico(10);
celular.usaraAplicatico(10);
celular.usaraAplicatico(10);
celular.usaraAplicatico(10);
celular.usaraAplicatico(10);
celular.usaraAplicatico(49);