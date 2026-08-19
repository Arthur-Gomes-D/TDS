class Quarto {
    public numero:number
    public precoDiaria:number
    public reserva:boolean
    constructor(numero:number, precoDiaria:number, reserva:boolean){
        this.numero = numero
        this.precoDiaria = precoDiaria
        this.reserva = reserva
    }
}
class Hotel {
    private quartos:Quarto[]
    constructor(){
        this.quartos = []
    }
    public cadastrarQuatro(quarto:Quarto):void{
        this.quartos.push(quarto)
        console.log("quarto número registrado");
        
    }
    public reservarQuatro(numero:number, dias:number){
        for (const quatro of this.quartos) {
            if (quatro.numero == numero && !quatro.reserva) {
                quatro.reserva = true
                console.log(`O quarto de número ${numero} está disponivel!`);
                console.log(`sua diaria será de ${quatro.precoDiaria * dias} R$`);
            }else{
                console.log("quarto não encontrado ou quarto já reservado");
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