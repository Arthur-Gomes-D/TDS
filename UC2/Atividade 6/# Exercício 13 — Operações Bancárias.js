
const input = require("prompt-sync")();

let saldo = 1500;

console.log("1 → Saldo");
console.log("2 → Saque");
console.log("3 → Depósito");
console.log("4 → Transferência");

let operacaoBancaria = +input("O que você quer fazer? ")

switch (operacaoBancaria) {
    case 1:
        console.log(`O saldo atual é ${saldo}`);
        break;
    case 2:
        console.log("saldo: " + saldo);
        const saque = +input("Quanto você deseja sacar: ")

        if (saque > saldo) {
            console.log("O saque passa do saldo");
        } else{
            console.log("Sacado com sucesso");
            console.log(`Seu saldo atual agora é de ${saldo - saque}`);
        }
        break;
    case 3:
        console.log("saldo: " + saldo);
        const deposito = +input("Quanto você deseja depósitar? ")
        console.log(`Seu saldo atual agora é de ${saldo + deposito}`);
        break;
    case 4:
        console.log("saldo: " + saldo);
        console.log("=== Contas ===");
        console.log("1 - conta b");
        
        const conta_transferencia = +input("Para qual conta você deseja fazer uma transferencia: ")
        if (conta_transferencia != 1) {
            console.log("Confira o número da conta inserido");
        }else{
            const transferencia = +input("Quanto será transfirdo: ")
            if (transferencia > saldo) {
                console.log("O saque passa do saldo");
            } else {
                console.log("Transferido com sucesso");
            }
        }
        break;
    default:
        console.log("Confira o valor colocado");
        
        break;
}

