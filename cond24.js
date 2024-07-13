const readlineSync = require("readline-sync");
const venda = Number(readlineSync.question("Qual valor das vendas? "));

if (venda <= 30) {
    console.log("Você ganhou R$ 250,00");
} else if (venda <= 80) {
    console.log("Você ganhou R$ 500,00");
} else if (venda <= 200) {
    console.log("Você ganhou R$ 1.000,00");
} else if (venda > 200) {
    console.log("Você ganhou R$ 2.000,00");
}




/*24. Uma loja deseja recompensar os seus empregados de acordo com o número de
vendas que eles realizaram num determinado mês. Crie um algoritmo que leia o
número de vendas de um empregado e calcule o seu bônus, conforme a 
a. Se o número de vendas for menor que 30, o bônus é de R$ 250,00;
b. Se o número de vendas for maior que 31 e menor que 80, o bônus é de R$
500,00;
c. Se o número de vendas for maior que 80 e menor que 200, o bônus é de
R$ 1.000,00;
d. Se o número de vendas for 200 ou maior, o bônus é de R$ 2.000,00.
*/
