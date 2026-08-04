class Livro{

    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor
        this.isbn = isbn
    }

    exibirInformacao(){
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`ISBN: ${this.isbn}`);
    }

}
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 123)
const livro2 = new Livro("1984", "George Orwell", "458")

livro1.exibirInformacao()
livro2.exibirInformacao()