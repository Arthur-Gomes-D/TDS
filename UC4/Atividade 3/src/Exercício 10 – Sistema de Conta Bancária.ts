class ContaBancaria {
    titular: string
    saldo: number
    constructor(titular: string, saldo: number) {
        this.saldo = saldo
        this.titular = titular
    }

    depositar(num: number) {
        this.saldo += num
        console.log("┌────────────────────────┐");
        console.log("│ Depositando...         │");
        console.log("│────────────────────────│");
        console.log(`│ Valor: ${num}`);
        console.log(`│ Valor: ${this.saldo}`);
        console.log("└────────────────────────┘");
    }

    sacar(num: number) {
        if (num > this.saldo) {
            console.log("┌────────────────────────┐");
            console.log("│ ERRO!!!                │");
            console.log("│────────────────────────│");
            console.log(`│ VALOR MUITO ALTO!!!    │`);
            console.log("└────────────────────────┘");
        } else {
            this.saldo -= num
            console.log("┌────────────────────────┐");
            console.log("│ Sacando...             │");
            console.log("│────────────────────────│");
            console.log(`│ Valor sacado: ${num}`);
            console.log(`│ Saldo: ${this.saldo}`);
            console.log("└────────────────────────┘");
        }
    }
}

let contaTeste = new ContaBancaria("João Testa", 1000)

contaTeste.sacar(100)
contaTeste.depositar(250)