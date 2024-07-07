const readlineSync = require('readline-sync');
const compras1= Number (readlineSync.question("Qual foi o valor da compra Estadual?"));
const compras2= Number (readlineSync.question("Qual foi o valor da Municipal ?"));


estadual=compras1*4/100;
municipal=compras2*4/100;

valorTotal=estadual+municipal;

console.log("Valor da venda :",compras1+compras2,"R$")
console.log("Valor da  estadual porcentagem:",estadual,"%")
console.log("Valor da municipal porcentagem:",municipal,"%")

console.log("Valor total da venda :",valorTotal,"R$")











/*8. Imposto sobre vendas – Crie um algoritmo que solicite ao usuário que insira o
valor da compra. O programa deve calcular os impostos de vendas estadual e
municipal. Suponha que o imposto estadual sobre vendas seja de 4% e o imposto
estadual sobre vendas seja de 2%. O programa deve exibir o valor da compra, o
imposto estadual sobre vendas, o imposto municipal sobre vendas, o imposto
total sobre vendas e o total da venda (que é a soma do valor da compra mais o
imposto total sobre vendas).
Lembrete: 2% =
2
100
= 0,02 e 4% =
4
100
= 0,04
*/