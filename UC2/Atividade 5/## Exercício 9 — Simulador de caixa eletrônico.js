
let saldo = 2000;
let saque = 1000;

if (saque % 10 == 0) {
    if (saque < 20) {
        console.log("O saque deve ser maior do que 20");
    }else if (saque > 1000) {
        console.log("O saque deve ser menor do que 1000");
    } else{
        console.log("Saque realizado");
    }
} else{
    console.log("O saque deve ser um múltiplo de 10");
}

