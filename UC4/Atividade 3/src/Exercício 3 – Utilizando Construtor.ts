class Livro {
    titulo:string;
    autor:string;
    constructor(titulo:string, autor:string){
        this.titulo = titulo
        this.autor = autor
    }

    mostrarDados(){
        console.log("┌<Livro>────────────────────────────────────────────────────────────────┐");
        console.log(`│ título: ${this.titulo}`);
        console.log("│───────────────────────────────────────────────────────────────────────│");
        console.log(`│ autor: ${this.autor}`);
        console.log("└───────────────────────────────────────────────────────────────────────┘");
        
    }
}

let livros = [new Livro("Arte de grammatica da lingoa mais usada na costa do Brasil", "José de Anchieta"), new Livro("Languages of the Pre-Columbian Antilles", "Julian Granberry")]

livros[0].mostrarDados()
livros[1].mostrarDados()
