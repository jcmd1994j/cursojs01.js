const readlineSny=require('readline-sync')
const moedinhas=Number(readlineSny.question("Qual valor você precisa troca ?"));
//1,00 - 0,50 -0.25 -0.10-0,05-0.01

umReal=moedinhas*100/100;
cinquenta=moedinhas*100/50;
vinteCinco=moedinhas*100/25;
dezCent=moedinhas*100/10;
cincoCent=moedinhas*100/5;
umCent=moedinhas*100/1;

console.log(`Troco de 1 real:${umReal} moedas`);
console.log(`Troco de 50 centavos:${cinquenta} moedas`);
console.log(`Troco de 25 centavos:${vinteCinco} moedas`);
console.log(`Troco de 10 centavos:${dezCent} moedas`);
console.log(`Troco de 5 centavos:${cincoCent} moedas`);
console.log(`Troco de 1 centavos:${umCent} moedas`);





















/*21. Troco em moedas – Crie um algoritmo que calcule e exiba a conversão de uma 
determinada quantidade em reais em moedas de R$ 1.00, R$ 0.50, R$ 0.25, R$ 
0.10, R$ 0.05 e R$ 0.01. Por exemplo, R$ 3.78 resulta em três moedas de um real, 
uma de cinquenta centavos, duas de dez centavos, uma de 5 centavos e três de 
um centavo.  
*/
