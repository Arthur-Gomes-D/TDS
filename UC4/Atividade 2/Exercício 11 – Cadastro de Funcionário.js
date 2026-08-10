class funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
    mostrarFuncionario(){
        console.log("Nome: " , this.nome);
        console.log("Cargo: ", this.cargo);
        console.log("Salário: ", this.salario);
    }

    aumentoSalarial(aumento){
        this.salario += aumento
    }

    mudarCargo(cargoNovo){
        this.cargo = cargoNovo
    }

    mudarNome(nomeNovo){
        this.nome = nomeNovo
    }
}

let teste = new funcionario("AAAA", "aaaa", 10)

teste.mostrarFuncionario()
console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
teste.aumentoSalarial(1000)
teste.mostrarFuncionario()
console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
teste.mudarCargo("Teste1")
teste.mostrarFuncionario()
console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
teste.mudarNome("nome1")
teste.mostrarFuncionario()
console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
