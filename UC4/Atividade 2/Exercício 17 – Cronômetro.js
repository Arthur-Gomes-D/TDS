class Cronometro {
    constructor() {

    }

    iniciar(fim) {
        for (let i = 1; i !== fim+1; i++) {
            if (i != 1) {
                console.log(i + " Segundos");
            } else {
                console.log(i + " Segundo");
            }
        }
    }
}
let cronometro = new Cronometro()

cronometro.iniciar(10)