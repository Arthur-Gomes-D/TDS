const vendas = {
    janeiro: 1000,
    fevereiro: 1500,
    marco: 2000
};

let total = 0

for (let venda in vendas){
    total += vendas[venda]
}
console.log("Total de vendas:", total);
