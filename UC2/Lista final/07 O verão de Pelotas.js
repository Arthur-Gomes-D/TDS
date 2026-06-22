let temperaturas = [28, 31, 35, 22, 19, 33, 30];
let temperatura_mais_alta = temperaturas[0]
let dias_mais_de_30 = []
let total = 0

for(let i = 0; i <= (temperaturas.length-1); i++){
    if (temperaturas[i] > temperatura_mais_alta) {
        temperatura_mais_alta = temperaturas[i]
    }
    if (temperaturas[i] >= 30) {
        dias_mais_de_30.push(temperaturas[i])
    }
    total += temperaturas[i]
}
console.log("temperatura mais alta", temperatura_mais_alta);
console.log(dias_mais_de_30.length,"dia(s) passaram dos 30 graus");
console.log("média", total/temperaturas.length, "Celsius");

