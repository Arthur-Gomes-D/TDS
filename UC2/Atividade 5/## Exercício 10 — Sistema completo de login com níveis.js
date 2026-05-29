

let usuario = "gerente";
let senha = "1234";

if (senha == "1234" && (usuario == "admin" || usuario == "gerente" || usuario == "cliente")) {
    if (usuario == "admin") {
        console.log("Acesso total");
    } else if (usuario == "gerente") {
        console.log("Acesso intermediário");
    }else if (usuario = "cliente") {
        console.log("Acesso básico");
    }
} else if (senha != "1234") {
    console.log("Senha inválida");
}else {
    console.log("Usuário não encontrado");
}
