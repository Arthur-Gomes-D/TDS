class Temperatura{
    temperatura:number
    constructor(temperatura:number){
        this.temperatura = temperatura
    }
    converterParaKelvin(){
        return this.temperatura + 273.15
    }
    converterParaFahrenheit(){
        return this.temperatura * 1.8 + 32
    }
}

const cincoGrausC = new Temperatura(5)
console.log(cincoGrausC.converterParaFahrenheit());
console.log(cincoGrausC.converterParaKelvin());
