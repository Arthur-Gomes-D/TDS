class Tabuada {
    constructor(num) {
        this.num = num
    }
    calcular() {
        for (let i = 0; i <= 10; i++) {
            console.log(`${i} * ${this.num} = ${i * this.num}`);
        }
    }
}
let cinco = new Tabuada(5)
cinco.calcular()