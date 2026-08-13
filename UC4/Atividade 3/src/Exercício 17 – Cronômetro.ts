class Cronometro {
    constructor() {

    }
    iniciar(fim: number) {
        console.log("┌───────────────┐");
        console.log("│ Contando...   │");
        console.log("├───────────────┤");
        for (let i = 1; i !== fim + 1; i++) {
            if (i != 1) {
                if (i < 10) {
                    console.log("│ " + i + " Segundos    │");
                } else {
                    console.log("│ " + i + " Segundos   │");
                }
            } else {
                console.log("│ " + i + " Segundo     │");
            }
            if (i != fim) {
                console.log("├───────────────┤");

            } else {
                console.log("└───────────────┘");

            }
        }
    }
}
let cronometro = new Cronometro()

cronometro.iniciar(10)