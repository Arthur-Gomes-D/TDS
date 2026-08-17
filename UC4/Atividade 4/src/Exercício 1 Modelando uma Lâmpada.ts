class Lampada {
    private ligada:boolean
    constructor(){
        this.ligada = false
    }

    public ligar():void{
        this.ligada = true
    }
    public desligar():void{
        this.ligada = false
    }
    public isLigado():boolean{
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
