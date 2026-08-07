class Boletim {
    constructor(nome, nota1, nota2) {
        this.nome = nome
        this.notas = [nota1, nota2]
    }

    calcularMedia(){
        let total = 0
        for(let i = 0; i <= this.notas.length-1; i++){
            total = total + this.notas[i]
        }
        const media = total/this.notas.length
        if (media >= 7) {
            console.log("Aprovado");
        }else{
            console.log("Reprovado");
            
        }
    }
}

let claudio = new Boletim("Claudio", 7, 7)

claudio.calcularMedia()