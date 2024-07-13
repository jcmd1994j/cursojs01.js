const readlineSync = require("readline-sync");
const jogos = Number(readlineSync.question("Quantos jogos você comprou? "));

const precoPorJogo = 150;
let desconto = 0;

if (jogos >= 10 && jogos <= 19) {
    desconto = 0.20;
} else if (jogos >= 20 && jogos <= 49) {
    desconto = 0.30;
} else if (jogos >= 50 && jogos <= 99) {
    desconto = 0.40;
} else if (jogos >= 100) {
    desconto = 0.50;
} else if (jogos < 10) {
    desconto = 0;
} else {
    console.log("Erro");
    
}

const valorTotalSemDesconto = jogos * precoPorJogo;
const valorTotalComDesconto = valorTotalSemDesconto * (1 - desconto);

console.log("Valor total sem desconto: R$", valorTotalSemDesconto);
console.log("Desconto de ",desconto * 100,"% aplicado: R$" ,valorTotalSemDesconto - valorTotalComDesconto)
console.log("Valor total com desconto: R$", valorTotalComDesconto);

















/*10. Uma loja de jogos vende cada jogo por R$ 150.00, mas concede descontos
conforme a quantidade comprada, conforme a tabela a seguir:
Quantidade de jogos comprados
Desconto
10–19
20%
20–49
30%
50 a 99
40%
100 ou mais
50%
Crie um algoritmo que leia o número de jogos comprados, o valor original da
compra, o valor do desconto (se houver) e o valor total da compra após o desconto.
*/