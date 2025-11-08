const readlineSny=require('readline-sync')
const minutos=Number(readlineSny.question("Quantas minutos são?"));
const hora =Number(readlineSny.question("Que horas são?"));


MinutoHoras=minutos/60;
horaDias=hora/24;



console.log(`${minutos}minutos equivalem a ${hora} horas e é igual a ${horaDias} dias`)








/*22. Conversão de unidades (minutos para horas e dias) - Escreva um programa que 
aceite uma quantidade de minutos e o converta em horas e dias. Por exemplo, 
6.000 minutos equivalem a 100 horas e é igual a 4.167 dias.
*/
