
const readlineSync = require('readline-sync');
const vendas= Number (readlineSync.question("Qual foi o valor de vendas ?"));

porc=vendas*23/100;

console.log("Valor da venda :",vendas,"R$")
console.log("Valor da porcentagem:",porc,"%")












/*4. Previsão de vendas – Sabendo que o lucro anual de uma empresa é, tipicamente,
23% do total de vendas, crie um algoritmo que solicite ao usuário entre com o
valor projetado do total de vendas e, em seguida, calcule e exiba o lucro que
deve ser obtido com esse valor.
Lembrete: 23% =
23
100
= 0,23
*/