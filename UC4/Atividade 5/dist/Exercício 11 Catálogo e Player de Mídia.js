"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Midia {
    _titulo;
    _duracaoSegundos;
    constructor(titulo, duracaoSegundos) {
        this._titulo = titulo;
        this._duracaoSegundos = duracaoSegundos;
    }
    reproduzir() {
        console.log("reproduzindo midia");
    }
}
class Musica extends Midia {
    _artista;
    constructor(titulo, duracaoSegundos, artista) {
        super(titulo, duracaoSegundos);
        this._artista = artista;
    }
    reproduzir() {
        console.log("tocando musica");
    }
}
class Video extends Midia {
    _resolucao;
    constructor(titulo, duracaoSegundos, resolucao) {
        super(titulo, duracaoSegundos);
        this._resolucao = resolucao;
    }
    reproduzir() {
        console.log("reproduzindo video");
    }
}
class Player {
    _midias;
    constructor() {
        this._midias = [];
    }
    adicionarMusica(titulo, duracaoSegundos, artista) {
        console.log("Musica adicionada");
        this._midias.push(new Musica(titulo, duracaoSegundos, artista));
    }
    adicionarVideo(titulo, duracaoSegundos, resolucao) {
        console.log("Video adicionado");
        this._midias.push(new Video(titulo, duracaoSegundos, resolucao));
    }
    reproduzirTudo() {
        this._midias.forEach(midia => {
            console.log(midia.reproduzir());
        });
    }
}
let pla = new Player();
pla.adicionarMusica("iofas", 213, "iofiaos");
pla.adicionarVideo("fofioaw", 32153, "iojfasoidj");
pla.reproduzirTudo();
