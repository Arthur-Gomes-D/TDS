class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo = this.saldo + valor
        console.log("Saldo de " + valor + " depositado com sucesso");
        console.log("Saldo da conte agora é " + this.saldo);

    };

    sacar(valor) {
        if (valor < this.saldo) {
            const novo_valor = this.saldo - valor
            console.log("R$ " + valor + " sacado");
            console.log("Saldo atual agora é R$" + novo_valor);

        } else {
            console.log("valor não pode ser sacado");

        }
    }
}

let contas = [new ContaBancaria("Arthur", 1000)]

contas[0].depositar(1000)
contas[0].sacar(100)