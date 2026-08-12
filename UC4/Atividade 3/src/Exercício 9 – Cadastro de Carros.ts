class Carro {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    mostrarInformacoes() {
        console.log("┌<Carro>─────────────────┐");
        console.log("│ Marca: ", this.marca);
        console.log("│ Modelo: ", this.modelo);
        console.log("│ Ano: ", this.ano);
        console.log("└────────────────────────┘");

    }
}
let carros = [new Carro("jfns", "jnfkwe3", 2331), new Carro("Mwftfe", "JANF4", 2123), new Carro("HHA", "HE0F", 2430)]

carros[0].mostrarInformacoes()
carros[1].mostrarInformacoes()
carros[2].mostrarInformacoes()