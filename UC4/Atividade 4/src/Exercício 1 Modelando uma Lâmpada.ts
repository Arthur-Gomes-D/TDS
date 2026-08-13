class Lampada {
    private ligada:boolean
    constructor(){
        this.ligada = false
    }

    ligar(){
        this.ligada = true
    }
    desligar(){
        this.ligada = false
    }
    isLigado(){
        return this.ligada
    }
}

let lamdapa = new Lampada()

console.log(lamdapa.isLigado());
lamdapa.ligar()
console.log(lamdapa.isLigado());
lamdapa.desligar()
console.log(lamdapa.isLigado());
