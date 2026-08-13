"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Biblioteca {
    constructor(nome, quantidadeLivros) {
        this.nome = nome;
        this.quantidadeLivros = quantidadeLivros;
    }
    emprestarLivro() {
        if (this.quantidadeLivros > 0) {
            console.log("┌────────────────────────────────────────────────────────────┐");
            console.log("│ Sucesso!                                                   │");
            console.log("│────────────────────────────────────────────────────────────│");
            console.log(`│ Livro: ${this.nome}`);
            console.log("│ Livro emprestado com sucesso!                              │");
            console.log("└────────────────────────────────────────────────────────────┘");
            this.quantidadeLivros -= 1;
        }
        else {
            console.log("┌<!><!><!>───────────────────────────┐");
            console.log("│ ERRO!                              │");
            console.log("│────────────────────────────────────│");
            console.log(`│ Livro: ${this.nome}`);
            console.log("│ não existe mais nenhuma copia des- │");
            console.log("│ se livro no sistema.               │");
            console.log("└────────────────────────────────────┘");
        }
    }
    devolverLivro() {
        console.log("┌────────────────────────────────────────────────────────────┐");
        console.log("│ Sucesso!                                                   │");
        console.log("│────────────────────────────────────────────────────────────│");
        console.log(`│ Livro: ${this.nome}`);
        console.log("│ Livro devolvido com sucesso!                               │");
        console.log("└────────────────────────────────────────────────────────────┘");
        this.quantidadeLivros += 1;
    }
    mostrarQuantidade() {
        console.log("┌────────────────────────────────────────────────────────────┐");
        console.log(`│ Livro: ${this.nome}`);
        console.log("│────────────────────────────────────────────────────────────│");
        console.log(`│ Copias: ${this.quantidadeLivros}`);
        console.log("└────────────────────────────────────────────────────────────┘");
    }
}
let gramatica = new Biblioteca("Arte de Gramática da Língua Mais Usada na Costa do Brasil", 2);
gramatica.emprestarLivro();
gramatica.emprestarLivro();
gramatica.devolverLivro();
gramatica.mostrarQuantidade();
