"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Filme {
    constructor(nome, genero, duracao) {
        this.nome = nome;
        this.genero = genero;
        this.duracao = duracao;
    }
    assistir() {
        console.log(`Você está assistindo o filme ${this.nome}.`);
    }
    emSegundos() {
        return this.duracao * 60;
    }
    emHoras() {
        return (this.duracao / 60).toFixed(2);
    }
}
let filmes = [new Filme("Avatar", "Ação", 161), new Filme("Avatar: The Way of Water", "Ação", 192), new Filme("Avatar: Fire and Ash", "Ação", 197)];
filmes[0].assistir();
filmes[1].assistir();
filmes[2].assistir();
