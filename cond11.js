

const readlineSync = require("readline-sync");
const segundos = Number(readlineSync.question("Quantos segundos são? "));

if (segundos >= 86400) {
    const dias = segundos / 86400;
    console.log("São:", dias, "dias");
} else if (segundos >= 3600) {
    const horas = segundos / 3600;
    console.log("São:", horas, "horas");
} else if (segundos >= 60) {
    const minutos = segundos / 60;
    console.log("São:", minutos, "minutos");
} else {
    console.log("São:", segundos, "segundos");
}










/*11. Sabendo que há 60 segundos em um minuto, 3.600 segundos em uma hora e
86.400 segundo em um dia, crie um algoritmo que a partir de uma determinada
quantidade de segundos fornecida pelo usuário, converte-a da seguinte maneira:
• Se a quantidade de segundos for maior ou igual a 60, o programa deverá
exibir o número de minutos equivalente;
• Se a quantidade de segundos for maior ou igual a 3.600, o programa deverá
exibir o número de horas equivalente;
• Se a quantidade de segundos for maior ou igual a 86.400, será exibir o
número de dias equivalente.
*/