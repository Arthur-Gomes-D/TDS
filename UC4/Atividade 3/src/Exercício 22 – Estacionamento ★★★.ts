class Estacionamento {
    vagasOcupadas:number
    vagasTotais:number
    constructor() {
        this.vagasOcupadas = 0
        this.vagasTotais = 50
    }
    entrarCarro() {
        if (this.vagasOcupadas >= this.vagasTotais) {
            console.log("┌────────────────────────────────────┐");
            console.log("│ Estacionamento cheio               │");
            console.log("└────────────────────────────────────┘");
        } else {
            this.vagasOcupadas += 1
            if (this.vagasTotais - this.vagasOcupadas <= 9) {
                console.log("┌────────────────────────────────────┐");
                console.log("│ Carro estacionado                  │");
                console.log("│────────────────────────────────────│");
                console.log(`│ Espaço sobrando ${this.vagasTotais - this.vagasOcupadas}                  │`);
                console.log("└────────────────────────────────────┘");
            } else {
                console.log("┌────────────────────────────────────┐");
                console.log("│ Carro estacionado                  │");
                console.log("│────────────────────────────────────│");
                console.log(`│ Espaço sobrando ${this.vagasTotais - this.vagasOcupadas}                 │`);
                console.log("└────────────────────────────────────┘");
            }
        }
    }
    sairCarro() {
        if (this.vagasOcupadas > 0) {
            this.vagasOcupadas -= 1
            console.log("┌────────────────────────────────────┐");
            console.log("│ Vaga liberada                      │");
            console.log("└────────────────────────────────────┘");
        } else {
            console.log("┌─<i>────────────────────────────────┐");
            console.log("│ ERRO!                              │");
            console.log("│────────────────────────────────────│");
            console.log("│ estacionamento vazio               │");
            console.log("└────────────────────────────────────┘");
        }

    }
    mostrarStatus() {
        console.log("┌────────────────────────────────────┐");
        console.log("│ Status                             │");
        console.log("│────────────────────────────────────│");
        console.log(`│ Vagas ocupadas: ${this.vagasOcupadas}`);
        console.log(`│ Vagas totais: ${this.vagasTotais}`);
        console.log(`│ Vagas livres: ${this.vagasTotais - this.vagasOcupadas}`);
        console.log("└────────────────────────────────────┘");
    }
}

let estacionamento123 = new Estacionamento()
estacionamento123.entrarCarro()
estacionamento123.sairCarro()
estacionamento123.entrarCarro()
estacionamento123.entrarCarro()
estacionamento123.entrarCarro()
estacionamento123.entrarCarro()
estacionamento123.entrarCarro()
estacionamento123.entrarCarro()
estacionamento123.mostrarStatus()