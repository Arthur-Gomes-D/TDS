let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

let novoNumeros = numeros.slice(1, 4)
console.log(numeros);
console.log(novoNumeros);

/*
    O valor antigo não fui alterado, pois os valores apenas foram copiados para outro array.
*/
