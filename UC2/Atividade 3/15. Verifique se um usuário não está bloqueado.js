

let bloqueado = false
let limite_de_tentativas = 5
let tentativas = 2

let conta_bloqueada = bloqueado || tentativas >= limite_de_tentativas

console.log("usuário bloquado: "+ conta_bloqueada);
