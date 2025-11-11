const readlineSync = require("readline-sync");
const jogos= Number(readlineSync.question("Quantos jogos você comprou  ? "));
desconto20=150-0.20;
desconto30=150-0.30;
desconto40=150-0.40;
desconto50=150-0.30;





if(jogos >= 10 && jogos >= 19){
console.log(`Valor a pagar  : ${desconto20}`)
}
else if(jogos >= 20 && jogos >= 49){
console.log(`Valor a pagar  : ${desconto30}`)
}
else if(jogos >= 50 && jogos >= 99){
console.log(`Valor a pagar  : ${desconto40}`)
}
else if(jogos >= 100){
console.log(`Valor a pagar  : ${desconto50}`)
}







/*10. Uma loja de jogos vende cada jogo por R$ 150.00, mas concede descontos 
conforme a quantidade comprada, conforme a tabela a seguir: 
Quantidade de jogos comprados 
10–19 
Desconto 
20% 
20–49 
50 a 99 
30% 
40% 
100 ou mais 
50% 
Crie um algoritmo que leia o número de jogos comprados, o valor original da 
compra, o valor do desconto (se houver) e o valor total da compra após o desconto. 
*/
