"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    titulo;
    autor;
    disponivel;
    constructor(titulo, autor, disponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }
}
class Biblioteca {
    _acervo;
    constructor() {
        this._acervo = [];
    }
    cadastrarLivro(titulo, autor, disponivel) {
        this._acervo.push({ titulo, autor, disponivel });
    }
    emprestarLivro(titulo) {
        for (const livro of this._acervo) {
            if (livro.titulo == titulo && livro.disponivel) {
                console.log(`Livro ${livro.titulo} emprestado!`);
                livro.disponivel = false;
            }
            else if (livro.titulo != titulo || !livro.disponivel) {
                throw new Error("Livro não existe ou indisponível");
            }
        }
    }
    devolverLivro(titulo) {
        for (const livro of this._acervo) {
            if (livro.titulo == titulo && !livro.disponivel) {
                console.log("livro devolvido com sucesso");
                livro.disponivel = true;
            }
            else {
                console.log("livro não encontrado, ou já foi devolvido");
            }
        }
    }
}
let bibliotecaLegal = new Biblioteca();
bibliotecaLegal.cadastrarLivro("Livro 123", "autor 123", true);
try {
    bibliotecaLegal.emprestarLivro("Livro 123");
}
catch (error) {
    console.log("Livro não encontrado");
}
try {
    bibliotecaLegal.emprestarLivro("Livro 123");
}
catch (error) {
    console.log("Livro não encontrado");
}
bibliotecaLegal.devolverLivro("Livro 123");
bibliotecaLegal.devolverLivro("Livro 123");
