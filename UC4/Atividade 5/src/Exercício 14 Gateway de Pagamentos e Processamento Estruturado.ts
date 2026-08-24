declare var require: any
const prompt = require('prompt-sync')
class MetodoPagamento {
    protected _descricao: string
    constructor(descricao: string) {
        this._descricao = descricao
    }
    processar(valor: number): boolean {
        if (valor >= 1) {
            return true
        } else {
            return false
        }
    }

}
class CartaoCredito extends MetodoPagamento {
    private _limite: number
    private _taxaOperacao: number
    constructor(valor: string, limite: number) {
        super(valor)
        if (limite <= 0) {
            throw new Error("Cartão sem limite");
        } else {
            this._limite = limite
        }
        this._taxaOperacao = 0.02
    }
    override processar(valor: number): boolean {
        if (valor >= 1) {
            console.log("Compra feita no cartão");
            console.log("disconto adicionado");
            console.log(`${valor - (valor * this._taxaOperacao)} `);
            return true
        } else {
            return false
        }
    }
}
class Pix extends MetodoPagamento {
    private _taxaOperacao: number
    constructor(valor: string, limite: number) {
        super(valor)
        this._taxaOperacao = 0.05
    }
    override processar(valor: number): boolean {
        if (valor >= 1) {
            console.log("Compra feita no pix");
            console.log("disconto adicionado");
            console.log(`${valor - (valor * this._taxaOperacao)} `);
            return true
        } else {
            return false
        }
    }
}
class BoletoBancario extends MetodoPagamento {
    private descnto: number
    constructor(valor: string, limite: number) {
        super(valor)
        this.descnto = 2
    }
    override processar(valor: number): boolean {
        if (valor >= 1) {
            console.log("fazendo compra no banco");
            console.log("disconto adicionado");
            console.log(`${valor - this.descnto} `);
            let aa = prompt('senha? ')
            return true
        } else {
            return false
        }
    }
}
class Checkout {
    realizarCobranca(metodo: MetodoPagamento, valor: number) {
        metodo.processar(valor)
    }
}
let metodos = [new CartaoCredito("oiofsaio", 1000), new Pix("oiofsaio", 1000), new BoletoBancario("oiofsaio", 1000)]
let out = new Checkout()
try {
    out.realizarCobranca(metodos[0], 10000)
    out.realizarCobranca(metodos[1], 10000)
    out.realizarCobranca(metodos[2], 10000)
} catch (error) {
    console.log("Erro no checkout");
    
}