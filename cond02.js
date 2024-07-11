const readlineSync = require('readline-sync');
const primeiroNumero=Number (readlineSync.question("Qual o primeiro número?"));
const segundoNumero=Number (readlineSync.question("Qual o primeiro número?"));

if(primeiroNumero > segundoNumero){
    console.log("O primeiro número é maior!")
}
else if (segundoNumero > primeiroNumero){
    console.log("O segundo número é maior!")
}
else if(segundoNumero == primeiroNumero){
    console.log("Ambos são iguais!")
}
else{
    console.log("erro")
}













/*2. Escreva um algoritmo que leia dois números fornecidos pelo usuário e, conforme
o valor deles, exiba uma das seguintes mensagens: “O primeiro número informado
é o maior”, “O segundo número é o maior” ou “Ambos os números são iguais”. */
