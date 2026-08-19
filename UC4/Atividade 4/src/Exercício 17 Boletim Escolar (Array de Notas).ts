class Boletim {
    private notas: number[]
    constructor() {
        this.notas = []
    }
    public adicionarNota(nota: number): void {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota)
        } else {
            throw new Error("Nota invalida");
        }
    }
    public calcularMedia(): number {
        let total: number = 0
        for (let i = 0; i <= this.notas.length - 1; i++) {
            total += this.notas[i]

        }
        return total / this.notas.length
    }
    public isAprovado():boolean {
        if (this.calcularMedia() >= 7) {
            return true
        }else{
            return false
        }
    }
}
let boletim = new Boletim()


try {
    boletim.adicionarNota(10)
} catch (error) {
    console.log("Nota invalida");
}
try {
    boletim.adicionarNota(6)
} catch (error) {
    console.log("Nota invalida");
}
try {
    boletim.adicionarNota(7)
} catch (error) {
    console.log("Nota invalida");
}
try {
    boletim.adicionarNota(9)
} catch (error) {
    console.log("Nota invalida");
}
try {
    boletim.adicionarNota(7)
} catch (error) {
    console.log("Nota invalida");
}
try {
    boletim.adicionarNota(-7)
} catch (error) {
    console.log("Nota invalida");
}
console.log(boletim.calcularMedia());

if (boletim.isAprovado()) {
    console.log("Aluno foi aprovado");
}else{
    console.log("Aluno não foi aprovado");
    
}