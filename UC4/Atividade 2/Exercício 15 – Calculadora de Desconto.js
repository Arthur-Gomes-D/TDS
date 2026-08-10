class Compra {
    constructor(produto, valor) {
        this.produto = produto
        this.valor = valor
    }

    aplicarDesconto(percentual){
        let novoValor = (percentual/100) * this.valor
        this.valor = (this.valor - novoValor).toFixed(2)
    }
}

let compra = [new Compra("Monitor Gamer Samsung Odyssey G40 27 , 240 Hz, 1ms, Ajuste De Altura, Gsync, Freesync,hdmi, Dp, Fhd, Preto", 1819), new Compra("Notebook Samsung Galaxy Book4 Intel® U300 (1.20 Ghz, até 4.4GHz, 8 MB L3 Cache), Windows 11 Home, 8GB, 256GB SSD, UHD Graphics, 15.6'' Full HD LED, 1.55kg", 3499)]

console.log(compra[0].produto);
console.log(compra[0].valor);

compra[0].aplicarDesconto(19)
console.log(compra[0].produto);
console.log(compra[0].valor);

console.log(compra[1].produto);
console.log(compra[1].valor);

compra[1].aplicarDesconto(14)
console.log(compra[1].produto);
console.log(compra[1].valor);