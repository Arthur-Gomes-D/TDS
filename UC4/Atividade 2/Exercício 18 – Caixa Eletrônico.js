class CaixaEletronico {
    constructor() {
        this.saldo = 0
    }
    depositar(num) {
        this.saldo += num
        console.log("┌────────────────────────────────────┐");
        console.log("│ Deposito com sucesso               │");
        console.log("└────────────────────────────────────┘");
        console.log(` Valor: ${this.saldo}`);
        console.log("└────────────────────────────────────┘");
    }
    sacar(num) {
        if (this.saldo >= num) {
            this.saldo -= num
            console.log("┌────────────────────────────────────┐");
            console.log("│ Saque com sucesso                  │");
            console.log("└────────────────────────────────────┘");
            console.log(` Valor: ${this.saldo}`);
            console.log("└────────────────────────────────────┘");
        } else {
            console.log("┌<!><!><!>───────────────────────────┐");
            console.log("│ Erro!!!                            │");
            console.log("│────────────────────────────────────│");
            console.log("│ Saldo insuficiente                 │");
            console.log("└────────────────────────────────────┘");
        }
    }
    consultarSaldo() {
        console.log("┌────────────────────────────────────┐");
        console.log("│ Saldo                              │");
        console.log("└────────────────────────────────────┘");
        console.log(` Valor: ${this.saldo}`);
        console.log("└────────────────────────────────────┘");
    }
}
let caixaEletronico1 = new CaixaEletronico()

caixaEletronico1.depositar(10000)
caixaEletronico1.sacar(100)
caixaEletronico1.consultarSaldo()
caixaEletronico1.sacar(99010)