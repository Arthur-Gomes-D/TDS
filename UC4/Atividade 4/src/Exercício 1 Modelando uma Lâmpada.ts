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

if (lamdapa.isLigado()) {
    console.log("Lampada está ligada");
}else{
    console.log("Lampada está desligada");
    
}
lamdapa.ligar()
if (lamdapa.isLigado()) {
    console.log("Lampada está ligada");
}else{
    console.log("Lampada está desligada");
    
}
lamdapa.desligar()
if (lamdapa.isLigado()) {
    console.log("Lampada está ligada");
}else{
    console.log("Lampada está desligada");
    
}
