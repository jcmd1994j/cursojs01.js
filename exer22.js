
const readlineSync = require('readline-sync');

const minutos = Number(readlineSync.question("Digite a quantidade de minutos: "));

const horas = minutos / 60;
const dias = horas / 24;


console.log(minutos, "minutos equivalem a ",horas," horas");
console.log(minutos, "minutos equivalem a ",dias,"dias");





/*22. Conversão de unidades (minutos para horas e dias) - Escreva um programa que
aceite uma quantidade de minutos e o converta em horas e dias. Por exemplo,
6.000 minutos equivalem a 100 horas e é igual a 4.167 dias.
*/