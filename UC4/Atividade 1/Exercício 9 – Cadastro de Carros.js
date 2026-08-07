class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    mostrarInfo(){
        console.log("Marca: "+ this.marca);
        console.log("Modelo: "+ this.modelo);
        console.log("Ano: "+ this.ano);
    }
}

let carros = [new Carro("Fiat", "Modelo F123", 2000), new Carro("BYD", "Modelo Y-3", 2021), new Carro("Ford", "Modelo H3", 2005)]

carros[0].mostrarInfo();
carros[1].mostrarInfo();
carros[2].mostrarInfo();