class Usuario {
    email: string
    private _senha: string
    constructor(email: string, senha: string) {
        this.email = email
        this._senha = senha
    }

    set senha(novaSenha: string) {
        if (novaSenha.length < 8) {
            throw new Error("senha muito pequena");
        } else {
            this._senha = novaSenha
        }

    }
    autendicar(senhaDigirada: string) {
        if (senhaDigirada == this._senha) {
            return true
        } else {
            return false
        }
    }
}

let novoUsuario = new Usuario("123@gmail.com", "12345678")
novoUsuario.senha = "aaaaaaaa"

try {
    novoUsuario.senha = "aaaaaa"
} catch (error) {
    console.log("senha curta");

}
console.log(novoUsuario.autendicar("aaaaaaaa"));
console.log(novoUsuario.autendicar("aa1aaaaa"));
