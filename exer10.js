const readlineSny=require('readline-sync');
const refeicao=Number(readlineSny.question("Qual valor da refeição?"));


gorjeta=refeicao*15/100;
imposto=refeicao*7/100;
valorTotal=gorjeta+imposto+refeicao;


console.log(`Valor da refeição: ${refeicao} R$`);
console.log(`Valor da gorjeta: ${gorjeta} R$`);
console.log(`Valor do imposto: ${imposto} R$`);
console.log(`Valor da total: ${valorTotal} R$`);


























/*10. Gorjeta, Imposto e Total Pago por uma Refeição – Crie um algoritmo que peça 
para o usuário informar o valor de uma refeição num restaurante. A partir desse 
valor, o algoritmo deverá calcular o valor da gorjeta (15% sobre o valor da 
refeição), dos impostos (7% do valor da refeição) e o total a ser pago (valor da 
refeição mais os valores da gorjeta e dos impostos). Ao final, o algoritmo deverá 
exibir cada um desses valores e o total.
*/
