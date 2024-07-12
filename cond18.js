const readlineSync= require ("readline-sync");
const retangulo1=Number (readlineSync.question("Qual tamanho da base do 1 retangulo?"));
const base1=Number (readlineSync.question("Qual tamanho da altura  do 1 retangulo?"));
const retangulo2=Number (readlineSync.question("Qual tamanho da base do 2 retangulo?"));
const base2=Number (readlineSync.question("Qual tamanho da altura  do 2 retangulo?"));


if(retangulo1 > retangulo2){
 console.log("Tamanho do 1 retangulo:",retangulo1*base1,":m²")   
 console.log("Retangulo 1 é maior que o retangulo2!")
}
else if(retangulo2 > retangulo1){
    console.log("Tamanho do 2 retangulo:",retangulo2*base2,":m²")   
    console.log("Retangulo 2 é maior que o retangulo1!")
   }
else if(retangulo1 == retangulo2){
   console.log("Ambos retangulos são iguais!")
}






/*18. Sabendo que a área de um retângulo é o comprimento de sua base multiplicada
pela sua altura, construa um algoritmo que leia a base e a altura de dois retângulos
e informe ao usuário qual deles tem a área maior ou se ambas as áreas são iguais.
*/