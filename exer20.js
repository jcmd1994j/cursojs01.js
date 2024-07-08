
const readlineSync = require('readline-sync');
const refeicao1= Number (readlineSync.question("Quantos adultos vai comer?"));
const refeicao2= Number (readlineSync.question("Quantas crianças  vai comer?"));


adulto=refeicao1*20;
crianca=refeicao2*12;
valorTotal=adulto+crianca;
////////
lucroCrianca=adulto*7/100;
lucroAdulto=adulto*5/100;
lucroTotal=lucroAdulto+lucroCrianca+valorTotal;

console.log("tickets para adultos :",refeicao1,)
console.log("tickets para crianças :",refeicao2,)
console.log("Valor para pagar refeiçao de adultos:",adulto,"R$")
console.log("Valor para pagar reicão de crianças:",crianca,"R$")
console.log("Valor total:",valorTotal,"R$")

////////////////
console.log("Lucro do  prato de  adultos :",lucroAdulto,"%")
console.log("Lucro do  prato de  crianças :",lucroCrianca,"%")
console.log("Lucro total:",lucroTotal,"R$")






















/*20. Jantar Beneficente – O Clube Verde e Cor-de-Rosa está realizando um jantar
beneficente para arrecadar fundos para uma instituição filantrópica. O preço é
de R$ 20,00 para adultos e R$ 12,00 para crianças. Para auxiliar a pessoa que irá
trabalhar no caixa que vende os tickets para o jantar, escreva um algoritmo que
peça ao usuário o número de refeições de cada tipo (adulto ou criança) que um
cliente deseja comprar e exiba o total referente somente às refeições de adultos,
somente às de crianças e, por fim, a todas as refeições. Por exemplo, no caso de
um cliente que compre 2 tickets para adultos e 4 para crianças, a saída do
algoritmo seria um texto como “O cliente deve pagar R$ 40,00 pelos 2 tickets de
refeição para adultos e R$ 48,00 pelos 4 tickets de refeição para crianças,
totalizando R$ 88,00”.
Modificação: após criar esse algoritmo, modifique-o para considerar o lucro
obtido. Para isso, considere que os custos para produzir uma refeição de adulto
e de criança seja de R$ 5,35 e R$ 7,10, respectivamente. Quando o algoritmo
calcular quanto o cliente deve pagar, deverá exibir tamém o lucro total para cada
tipo de refeição e o lucro total geral.
*/