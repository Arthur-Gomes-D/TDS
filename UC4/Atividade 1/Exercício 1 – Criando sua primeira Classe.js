class pessoa {

    constructor(nome) {
        this.nome = nome
    }

    apresentar() {
        console.log(`Olá meu nome é ${this.nome}`);
    }
}

const joao = new pessoa("João")

joao.apresentar()