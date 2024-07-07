const readlineSync = require('readline-sync');
const velocidade = Number (readlineSync.question("Qual foi o  a velocidade do carro?"));

distancia5=velocidade*5;
distancia8=velocidade*8;
distancia12=velocidade*12;


console.log("A distância que o carro percorrerá em 5 horas :",distancia5,"k/h")
console.log("A distância que o carro percorrerá em 8 horas :",distancia8,"k/h")
console.log("A distância que o carro percorrerá em 12 horas :",distancia12,"k/h")










/*7. Distância percorrida por um automóvel – Supondo que não haja acidentes ou
atrasos, a distância que um automóvel percorre numa rodovia pode ser
calculada com a seguinte fórmula:
Distância = velocidade × tempo
Sabendo disso, construa um algoritmo em que o usuário possa informar a
velocidade em que um carro está viajando e exiba as seguintes informações:

A distância que o carro percorrerá em 5 horas;
A distância que o carro percorre em 8 horas;
A distância que o carro percorrerá em 12 horas.
*/


