const readlineSync = require('readline-sync');
const moedas= Number (readlineSync.question("Qual valor você precisa troca ?"));
//1.00, R$ 0.50, R$ 0.25, R$0.10, R$ 0.05 e R$ 0.01.


umReal=moedas*100/100
cinquent=moedas*100/5
vintecinco=moedas*100/25
dez=moedas*100/10
centcinco=moedas*100/5
umcent=moedas*100/1

console.log("Troco de 1 real:",umReal,"moedas");
console.log("Troco de 0,50 centavos:",cinquent,"moedas");
console.log("Troco de 0,25 centavos:",vintecinco,"moedas");
console.log("Troco de 0,10 centavos:",dez,"moedas");
console.log("Troco de 0,05 centavos:",centcinco,"moedas");
console.log("Troco de 0,01 centavos:",umcent,"moedas");



















/*21. Troco em moedas – Crie um algoritmo que calcule e exiba a conversão de uma
determinada quantidade em reais em moedas de R$ 1.00, R$ 0.50, R$ 0.25, R$
0.10, R$ 0.05 e R$ 0.01. Por exemplo, R$ 3.78 resulta em três moedas de um real,
uma de cinquenta centavos, duas de dez centavos, uma de 5 centavos e três de
um centavo.
*/