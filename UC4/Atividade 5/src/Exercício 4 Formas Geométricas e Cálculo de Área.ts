class Forma {
    public cor:string
    constructor(cor:string){
        this.cor = cor
    }
    calcularArea():number{
        return 0
    }
}

class Quadrado extends Forma{
    private _lado:number
    constructor(cor:string, lado:number){
        super(cor)
        this._lado = lado
    }
    override calcularArea():number{
        return this._lado**2
    }
}
const quadrado = new Quadrado("azul", 5);
console.log(quadrado.calcularArea());

class circulo extends Forma{
    private _raio:number
    constructor(cor:string, raio:number){
        super(cor)
        this._raio = raio
    }
    override calcularArea():number{
        return Math.PI * Math.pow(this._raio, 2)
    }
}

const lingkaran = new circulo("merah", 20);
console.log(lingkaran.calcularArea());
