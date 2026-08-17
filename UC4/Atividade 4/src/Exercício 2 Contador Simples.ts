class Contador{
    private num:number
    constructor(){
        this.num = 0
    }

    public incrementar():void{
        this.num += 1
    }
    public decremntar():void{
        this.num -= 1
    }
    public getValor():number{
        return this.num
    }
}

const contador1 = new Contador()

contador1.incrementar()
console.log(contador1.getValor());
contador1.decremntar()
console.log(contador1.getValor());
contador1.incrementar()
contador1.incrementar()
console.log(contador1.getValor());
contador1.incrementar()
contador1.decremntar()
console.log(contador1.getValor());
contador1.incrementar()
contador1.incrementar()
contador1.incrementar()
contador1.incrementar()
console.log(contador1.getValor());
