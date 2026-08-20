class Quarto {
    public numero:  number
    public precoDiaria:  number
    public reserva:  boolean
    constructor(numero:  number, precoDiaria:  number, reserva:  boolean)  {
        this.numero = numero
        this.precoDiaria = precoDiaria
        this.reserva = reserva
    }
}
class Hotel {
    private quartos:  Quarto[]
    constructor()  {
        this.quartos = []
    }
    public cadastrarQuatro(quarto:  Quarto):  void  {
        this.quartos.push(quarto)
        console.log("quarto número registrado");

    }
    public reservarQuatro(numero: number, dias: number) {
        const quarto = this.quartos.find((quart) => quart.numero == numero)
        if (quarto == undefined) {
            console.log("Quarto não encontrado");

        } else {
            if (quarto.reserva == false){
                console.log(`o quarto número ${quarto.numero} está disponivel e sua diaria será de ${quarto.precoDiaria * dias}`);
                quarto.reserva = true
            } else {
                console.log(`o quarto de número ${quarto.numero} já está reservado`);
                
            }
        }
    }
}
let meuHotel = new Hotel()
let quartos = [new Quarto(1, 40, false), new Quarto(32, 200, false), new Quarto(2, 10, false)]
meuHotel.cadastrarQuatro(quartos[0])
meuHotel.cadastrarQuatro(quartos[1])
meuHotel.cadastrarQuatro(quartos[2])
meuHotel.reservarQuatro(1, 10)
meuHotel.reservarQuatro(2, 10)
meuHotel.reservarQuatro(32, 10)

meuHotel.reservarQuatro(32, 10)
meuHotel.reservarQuatro(31, 10)