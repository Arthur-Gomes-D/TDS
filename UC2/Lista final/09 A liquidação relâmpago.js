let precos = [100, 50, 230, 80, 15, 300];

let precos_disconto = precos.map((chave) => chave - (20/100)*chave)
let abaixo_de_100 = precos_disconto.filter((preco) => preco < 100)
console.log(precos_disconto);
console.log(abaixo_de_100);
