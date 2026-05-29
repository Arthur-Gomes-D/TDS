

let temp = 38.5
let oxygen = 95

if (temp >= 39 || oxygen < 90 ) {
    console.log("Emergência");  
} else if (temp >= 37 && temp <= 38.9){
    console.log("Observação");
} else{
    console.log("Estável");    
}

