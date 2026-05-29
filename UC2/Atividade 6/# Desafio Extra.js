
const input = require("prompt-sync")();

let saldo = 1500;

console.log("1 → Ver saldo");
console.log("2 → Sacar");
console.log("3 → Depositar");
console.log("4 → Sair");

let operacaoBancaria = +input("O que você quer fazer? ")

switch (operacaoBancaria) {
    case 1:
        console.log(`O saldo atual é ${saldo}`);
        break;
    case 2:
        console.log("saldo: " + saldo);
        const saque = +input("Quanto você deseja sacar: ")

        if (saque > saldo || saque <= 0) {
            console.log("O saque passa do saldo ou é menor que 1");
        } else{
            console.log("Sacado com sucesso");
            console.log(`Seu saldo atual agora é de ${saldo - saque}`);
        }
        break;
    case 3:
        console.log("saldo: " + saldo);
        const deposito = +input("Quanto você deseja depósitar? ")
        if (deposito <= 0) {
            console.log("impossivel depositar valores menores que 1");
        } else{
            console.log(`Seu saldo atual agora é de ${saldo + deposito}`);
        }
        break;
    case 4:
        console.log("saindo... ");
        break;
    default:
        console.log("Confira o valor colocado");
        
        break;
}

