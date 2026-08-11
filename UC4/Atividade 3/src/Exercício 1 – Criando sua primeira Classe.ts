class Pessoa{
    nome: string;

    constructor(nome:string){
        this.nome = nome
    }

    apresentar(){
        console.log("Olá " + this.nome);
        
    }
}

let pessoas = [new Pessoa("Arthur")]
pessoas[0].apresentar()