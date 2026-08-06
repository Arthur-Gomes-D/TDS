class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }

    somar(){
        return this.num1 + this.num2
    }
}

const umMaisDois = new Calculadora(1, 2)

console.log(umMaisDois.somar());
