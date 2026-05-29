

const input = require("prompt-sync")();

let huruf = String(input("Mengetik sesuatu huruf: "))

switch (huruf) {
    case "a":
        console.log("Huruf ini adalah huruf vokal");
        
        break;
    case "e":
        console.log("Huruf ini adalah huruf vokal");
        
        break;
    case "i":
        console.log("Huruf ini adalah huruf vokal");
        
        break;
    case "o":
        console.log("Huruf ini adalah huruf vokal");
        
        break;
    case "u":
        console.log("Huruf ini adalah huruf vokal");
        
        break;

    default:
        console.log("Huruf ini adalah konsonan");
        
        break;
}

