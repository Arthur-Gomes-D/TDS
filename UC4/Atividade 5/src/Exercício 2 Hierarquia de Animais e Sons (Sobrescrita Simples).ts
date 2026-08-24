class Animal{
    protected _nome:string
    private _idade:number
    constructor(nome:string, idade:number){
        this._nome = nome
        this._idade = idade
    }
    set idade(num:number){
        if (num <= 0) {
            throw new Error("num invalido");
        }else{
            this._idade = num
        }
    }
    get idade():number{
        return this._idade
    }
    emitirSom():string{
        return "Som genérico de animal"
    }
}
class Gato extends Animal{
    constructor(nome:string, idade:number){
        super(nome, idade)
    }
    override emitirSom():string{
        return "Miau!"
    }
}
class Cachorro extends Animal{
    constructor(nome:string, idade:number){
        super(nome, idade)
    }
    override emitirSom():string{
        return "Au Au!"
    }
}
const gato = new Gato("O", 1)
const cao = new Cachorro("arguments", 2);
try {
    gato.idade = -1
} catch (error) {
    console.log("num invalido");
}
gato.idade += 1
console.log(gato.idade);
console.log(gato.emitirSom());

console.log(cao.emitirSom());
