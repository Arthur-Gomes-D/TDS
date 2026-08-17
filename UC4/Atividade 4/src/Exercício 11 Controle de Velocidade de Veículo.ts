class Carro {
    public modelo: string
    private velocidadeAtual: number
    private velocidadeMaxima: number
    constructor(modelo: string, velocidadeMaxima: number) {
        this.modelo = modelo
        this.velocidadeAtual = 0
        this.velocidadeMaxima = velocidadeMaxima
    }
    public acelerar(incremento: number): void {
        if (this.velocidadeAtual > this.velocidadeMaxima || (this.velocidadeAtual + incremento) >= this.velocidadeMaxima) {
            console.log("não é possivel acelerar mais");
        } else {
            this.velocidadeAtual += incremento
            console.log(`velocidade atual é ${this.velocidadeAtual}`);

        }
    }
    public frear(decremento: number): void {
        if (this.velocidadeAtual <= 0 || this.velocidadeAtual - decremento <= 0) {
            console.log("é impossivel ir mais lento");
        } else {
            this.velocidadeAtual -= decremento
            console.log("velocidade diminuida, velocidade atual: "+this.velocidadeAtual);

        }
    }
}
const carreta = new Carro("miof", 120);
carreta.acelerar(12)
carreta.acelerar(12)
carreta.acelerar(12)
carreta.acelerar(12)
carreta.acelerar(12)
carreta.acelerar(12)
carreta.acelerar(12)
carreta.acelerar(12)
carreta.acelerar(12)
carreta.acelerar(12)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)
carreta.frear(5)