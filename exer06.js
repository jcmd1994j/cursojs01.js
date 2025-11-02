const readlineSync=require('readline-sync');

const tenis=Number(readlineSync.question("Qual valor de tênis ?"));
const bolsa=Number(readlineSync.question("Valor da bolsa ?"));
const saia=Number(readlineSync.question("Qual valor da saia ?"));
const calca=Number(readlineSync.question("Valor da calça?"));
const blusa=Number(readlineSync.question("Qual valor da bolsa ?"));


subtotal=tenis+blusa+saia+calca+blusa;
imposto=subtotal*6/100;

console.log(`Valor do subtotal das compras : ${subtotal} R$`);
console.log(`Valor dos impostos : ${imposto} R$`);












/*6. Valores de uma Compra – Um cliente de uma loja está comprando cinco 
produtos. Crie um algoritmo que solicite o preço de cada um desses produtos e, 
em seguida, exiba o subtotal da venda, o valor do imposto e o valor total 
(subtotal da venda mais o valor do imposto). Suponha que a alíquota do imposto 
seja de 6% sobre o subtotal da venda.
*/
