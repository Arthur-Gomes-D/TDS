"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Playlist {
    nome;
    _musicas;
    constructor(nome) {
        this.nome = nome;
        this._musicas = [];
    }
    adicionarMusica(nomeMusica) {
        if (!this._musicas.includes(nomeMusica)) {
            this._musicas.push(nomeMusica);
            console.log(`${nomeMusica} adicionado com sucesso! `);
        }
    }
    removerMusica(nomeMusica) {
        if (!this._musicas.includes(nomeMusica)) {
            console.log("musica não encontrada");
        }
        else {
            console.log("Musica encontrada");
            this._musicas.splice(this._musicas.indexOf(nomeMusica), 1);
        }
    }
    listarMusica() {
        for (const musica of this._musicas) {
            console.log("Musica: " + musica);
        }
    }
}
let play123 = new Playlist("IREOI");
play123.adicionarMusica("jdfsoiuidf");
play123.adicionarMusica("jdf soiuidf");
play123.adicionarMusica("huidf");
play123.adicionarMusica("iuf");
play123.adicionarMusica("jif");
play123.listarMusica();
play123.removerMusica("jdfsoiuidf");
play123.listarMusica();
