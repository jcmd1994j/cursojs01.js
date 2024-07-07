const readlineSync = require('readline-sync');
const adulto= Number (readlineSync.question("Quantas marmitas para adultos ?"));
const crianca= Number (readlineSync.question("Quantas marmitas para crianças ?"));


gorgeta=adulto+crianca*15/100;
imposto=adulto+crianca*7/100;
total=gorgeta+imposto;




console.log("Valor da gorjeta :",gorgeta,"R$")
console.log("Valor da porcentagem:",imposto,"%")
console.log("Valor total da venda :",total,"R$")











/*10. Gorjeta, Imposto e Total Pago por uma Refeição – Crie um algoritmo que peça
para o usuário informar o valor de uma refeição num restaurante. A partir desse
valor, o algoritmo deverá calcular o valor da gorjeta (15% sobre o valor da
refeição), dos impostos (7% do valor da refeição) e o total a ser pago (valor da
refeição mais os valores da gorjeta e dos impostos). Ao final, o algoritmo deverá
exibir cada um desses valores e o total.
*/