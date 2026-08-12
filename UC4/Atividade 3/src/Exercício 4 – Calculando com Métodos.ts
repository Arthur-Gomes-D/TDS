class Calculadora {
    somar(num1:number, num2:number){
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }
}

let calculadora = new Calculadora()
calculadora.somar(5,5)