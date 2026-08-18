class Playlist {
    public nome: string
    private _musicas: string[]
    constructor(nome: string) {
        this.nome = nome
        this._musicas = []
    }
    public adicionarMusica(nomeMusica: string): void {
        if (!this._musicas.includes(nomeMusica)) {
            this._musicas.push(nomeMusica)
            console.log(`${nomeMusica} adicionado com sucesso! `);

        }
    }
    public removerMusica(nomeMusica: string): void {
        if (!this._musicas.includes(nomeMusica)) {
            console.log("musica não encontrada");
        } else {
            console.log("Musica encontrada");
            this._musicas.splice(this._musicas.indexOf(nomeMusica), 1)
        }
    }
    public listarMusica(): void {
        for (const musica of this._musicas) {
            console.log("Musica: " + musica);

        }
    }
}
let play123 = new Playlist("IREOI")

play123.adicionarMusica("jdfsoiuidf")
play123.adicionarMusica("jdf soiuidf")
play123.adicionarMusica("huidf")
play123.adicionarMusica("iuf")
play123.adicionarMusica("jif")
play123.listarMusica()
play123.removerMusica("jdfsoiuidf")
play123.listarMusica()
