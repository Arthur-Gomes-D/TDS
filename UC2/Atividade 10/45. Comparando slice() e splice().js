let lista1 = [1, 2, 3, 4, 5];
let lista2 = [1, 2, 3, 4, 5];
let lista1sli = lista1.slice(1, 4)
let lista2spl = lista2.splice(1,3)

console.log("lista1:");
console.log(lista1);
console.log(lista1sli);
console.log("lista2:");
console.log(lista2);
console.log(lista2spl);

/*
    slice apenas copia, em quanto o splice recorta, cola e subistui.
    por isso a lista 1 se mantem intacta enquanto a 2 ficou apenas com dois valores
*/