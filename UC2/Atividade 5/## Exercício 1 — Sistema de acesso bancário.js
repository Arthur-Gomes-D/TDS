

const prompt = require("prompt-sync")()

let username = prompt("Enter username: ")
let password = prompt("Enter password: ")
let balance = 350

const correct_username = "cliente"
const correct_password = "banco123"

if ((password == correct_password) && (username == correct_username)) {
    console.log("Welcome "+ username);
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    
    console.log("your current balence is " + balance + "R$");
    if (balance > 0) {
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log("Access granted");
    } else{
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log("account with no balance");
    }
        
} else{
    console.log("username or password are incorrect");
}

