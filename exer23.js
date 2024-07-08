const readlineSync = require('readline-sync');
const partido1= Number (readlineSync.question("Quantos votos para o partido 1?"));
const partido2= Number (readlineSync.question("Quantos votos para o partido 2?"));
const partido3= Number (readlineSync.question("Quantos votos para o partido 3?"));

porPart1=partido1*100/100;
porPart2=partido2*100/100;
porPart3=partido3*100/100;

console.log("valor da porcentagem de partido1:",porPart1,"%")
console.log("valor da porcentagem de partido2:",porPart2,"%")
console.log("valor da porcentagem de partido3:",porPart3,"%")









/*23. Percentual de votos – Escreva um algoritmo que aceite os nomes de três
partidos políticos e o número de votos que cada um recebeu na última eleição
para prefeito. Exibir a porcentagem de votos que cada partido recebeu.
*/