class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
    }

    mostrarInformacao() {
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
    }
}

const livros = [new Livro("Arte de grammatica da lingoa mais usada na costa do Brasil", "José de Anchieta")]

livros[0].mostrarInformacao()