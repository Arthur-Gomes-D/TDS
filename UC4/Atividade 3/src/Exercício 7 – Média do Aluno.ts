class Boletim {
    nome: string
    notas: number[]
    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome
        this.notas = [nota1, nota2]
    }

    calcularMedia() {
        let total: number = 0
        for (let i = 0; i <= this.notas.length - 1; i++) {
            total += this.notas[i]

        }
        let media = total / this.notas.length

        if (media >= 7) {
            console.log("Aprovado");
        } else {
            console.log("Reprovado");

        }
    }

}

let boletimNovo = new Boletim("ijufsj", 7, 7)
boletimNovo.calcularMedia()