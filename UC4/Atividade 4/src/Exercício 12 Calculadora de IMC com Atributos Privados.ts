class Pessoa{
    public nome:string
    private peso:number
    private altura:number
    constructor(nome:string, peso:number, altura:number){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }
    private calcularIMC():void {
        this.peso/(this.altura**2)
    }
}