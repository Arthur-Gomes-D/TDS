class Contador{
    private num:number
    constructor(){
        this.num = 0
    }

    incrementar(){
        this.num += 1
    }
    decremntar(){
        this.num -= 1
    }
    getValor(){
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
