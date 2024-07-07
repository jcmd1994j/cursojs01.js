const readlineSync = require('readline-sync');
const macarrao= Number (readlineSync.question("Qual foi o valor do macarrão ?"));
const arroz= Number (readlineSync.question("Qual foi o valor arroz ?"));
const feijao= Number (readlineSync.question("Qual foi o valor do feijão ?"));
const peixe= Number (readlineSync.question("Qual foi o valor do peixe?"));
const carne= Number (readlineSync.question("Qual foi o valor da carne?"));


soma=macarrao+arroz+feijao+peixe+carne;
imposto=soma*6/100;


console.log("Valor da venda :",soma,"R$")
console.log("Valor da porcentagem:",imposto,"%")
console.log("Valor total da venda :",soma+imposto,"R$")















/*6. Valores de uma Compra – Um cliente de uma loja está comprando cinco
produtos. Crie um algoritmo que solicite o preço de cada um desses produtos e,
em seguida, exiba o subtotal da venda, o valor do imposto e o valor total
(subtotal da venda mais o valor do imposto). Suponha que a alíquota do imposto
seja de 6% sobre o subtotal da venda.
*/