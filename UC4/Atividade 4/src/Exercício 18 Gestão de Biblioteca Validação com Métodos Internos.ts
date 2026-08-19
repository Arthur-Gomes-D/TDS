class Livro {
    public titulo:string
    public autor:string
    public disponivel:boolean
    constructor(titulo:string, autor:string, disponivel:boolean){
        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel
    }
}

class Biblioteca{
    private _acervo:Livro[]
    constructor(){
        this._acervo = []
    }
    public cadastrarLivro(titulo:string, autor:string, disponivel:boolean):void {
        this._acervo.push({titulo, autor, disponivel})
    }
    public emprestarLivro(titulo:string):void{
        for (const livro of this._acervo) {
            if (livro.titulo == titulo && livro.disponivel) {
                console.log(`Livro ${livro.titulo} emprestado!`);
                livro.disponivel = false
            }else if (livro.titulo != titulo || !livro.disponivel) {
                throw new Error("Livro não existe ou indisponível");
                
            }
        }
    }
    public devolverLivro(titulo:string):void{
        for (const livro of this._acervo) {
            if (livro.titulo == titulo && !livro.disponivel) {
                console.log("livro devolvido com sucesso");
                livro.disponivel = true
            }
            else{
                console.log("livro não encontrado, ou já foi devolvido");
                
            }
        }
    }
}
let bibliotecaLegal = new Biblioteca()
bibliotecaLegal.cadastrarLivro("Livro 123", "autor 123", true)
try {
    bibliotecaLegal.emprestarLivro("Livro 123")
} catch (error) {
    console.log("Livro não encontrado");
    
}
try {
    bibliotecaLegal.emprestarLivro("Livro 123")
} catch (error) {
    console.log("Livro não encontrado");
}
bibliotecaLegal.devolverLivro("Livro 123")
bibliotecaLegal.devolverLivro("Livro 123")