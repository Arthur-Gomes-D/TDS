function nomorAcak(max, min) {
    return Math.floor(Math.random()*(max-min+1)) + min
}

class Eleicao {
    constructor() {
        this.votosCandidato1 = 0
        this.votosCandidato2 = 0
        this.votosBrancos = 0
    }

    votar(num) {
        if (num == 1) {
            console.log("voto 1");
            this.votosCandidato1 += 1
        } else if (num == 2) {
            console.log("voto 2");
            this.votosCandidato2 += 1
        } else {
            console.log("branco");
            this.votosBrancos += 1
        }
    }
    resultado() {
        console.log("Votos brancos: " + this.votosBrancos);
        console.log("Votos Candidato 1: " + this.votosCandidato1);
        console.log("Votos Candidato 2: " + this.votosCandidato2);
    }
}

let eleicao = new Eleicao()

for (let i = 1; i <= 20; i++){
    eleicao.votar(nomorAcak(0,4))
}
eleicao.resultado()