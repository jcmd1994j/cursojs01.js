const readlineSync= require ("readline-sync");

const numero1=Number (readlineSync.question("Qual o número 1:"));
const numero2=Number (readlineSync.question("Qual o número 2:"));
const numero3=Number (readlineSync.question("Qual o número 3:"));


if(numero3 == numero1){
    console.log(":",numero1)
}
else if(numero1 == numero2){
    console.log(":",numero1)
}
else if(numero2 == numero1){
    console.log(": ",numero2)
}
else if(numero3 == numero2){
  console.log(":",numero2)
}
else {
    console.log("erro")
}


























/*4. Escreva um algoritmo que leia três números fornecidos pelo usuário e mostre se
a soma de dois deles resulta no terceiro.*/