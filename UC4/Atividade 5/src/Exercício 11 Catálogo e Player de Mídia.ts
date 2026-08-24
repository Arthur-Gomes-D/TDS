class Midia {
    protected _titulo: string
    protected _duracaoSegundos: number
    constructor(titulo: string, duracaoSegundos: number) {
        this._titulo = titulo
        this._duracaoSegundos = duracaoSegundos
    }
    reproduzir(): void {
        console.log("reproduzindo midia");
    }
}
class Musica extends Midia {
    private _artista: string
    constructor(titulo: string, duracaoSegundos: number, artista: string) {
        super(titulo, duracaoSegundos)
        this._artista = artista
    }
    override reproduzir(): void {
        console.log("tocando musica");
    }
}
class Video extends Midia {
    private _resolucao: string
    constructor(titulo: string, duracaoSegundos: number, resolucao: string) {
        super(titulo, duracaoSegundos)
        this._resolucao = resolucao
    }
    override reproduzir(): void {
        console.log("reproduzindo video");
    }
}
class Player{
    private _midias:Midia[]
    constructor(){
        this._midias = []
    }
    adicionarMusica(titulo:string, duracaoSegundos:number, artista:string):void{
        console.log("Musica adicionada");
        this._midias.push(new Musica(titulo, duracaoSegundos, artista))
    }
    adicionarVideo(titulo:string, duracaoSegundos:number, resolucao:string):void{
        console.log("Video adicionado");
        this._midias.push(new Video(titulo, duracaoSegundos, resolucao))
        
    }
    reproduzirTudo():void{
        this._midias.forEach(midia => {
            console.log(midia.reproduzir());
        });
    }
}
let pla = new Player()
pla.adicionarMusica("iofas", 213, "iofiaos")
pla.adicionarVideo("fofioaw", 32153, "iojfasoidj")
pla.reproduzirTudo()