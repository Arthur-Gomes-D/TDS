

let valorCompra = 1200;
let resultado = 0
let valorFinal = 0
if (valorCompra > 100 && valorCompra < 500) {
    resultado = (valorCompra * 10) / 100;
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log("Valor da compra: " + valorCompra);
    console.log("Disconto: 10%");
    console.log("Valor descontado: " + resultado)
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log(`Valor total: ${parseFloat(valorCompra) - parseFloat(resultado)}`)

} else if (valorCompra => 500 && valorCompra < 1000) {
    resultado = (valorCompra * 20) / 100;
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log("Valor da compra: " + valorCompra);
    console.log("Disconto: 20%");
    console.log("Valor descontado: " + resultado)
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log(`Valor total: ${parseFloat(valorCompra) - parseFloat(resultado)}`)

} else if (valorCompra > 1000) {
    resultado = (valorCompra * 30) / 100;
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log("Valor da compra: " + valorCompra);
    console.log("Disconto: 30%");
    console.log("Valor descontado: " + resultado)
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log(`Valor total: ${parseFloat(valorCompra) - parseFloat(resultado)}`)
}

