
const input = require("prompt-sync")();

console.log("====================");
console.log("| 1 → Hambúrguer   |");
console.log("| 2 → Pizza        |");
console.log("| 3 → Refrigerante |");
console.log("| 4 → Sorvete      |");
console.log("====================");

let pedido = +input("Escolha uma opisão de nosso menu: ")

switch (pedido) {
    case 1:
        console.log("=====================");
        console.log("seu pedido será um hambúrguer");
        break;
    case 2:
        console.log("=====================");
        console.log("seu pedido será um Pizza");
        break;
    case 3:
        console.log("=====================");
        console.log("seu pedido será um Refrigerante");
        break;
    case 4:
        console.log("=====================");
        console.log("seu pedido será um Sorvete");
        break;
    default:
        console.log("=====================");-
        console.log("Garanta que o número inserido está na lista");
        break;
}

