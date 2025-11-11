const readlineSny=require('readline-sync')

const numero1=Number(readlineSny.question("Diga o primeiro número ?"))
const numero2=Number(readlineSny.question("Diga o segundo número ?"))

if(numero1 == numero2){
console.log('Ambos são iguais ')
}
if(numero1 > numero2){
console.log('O numero 1 é maior que o número 2!')
}
if(numero2 > numero1){
console.log('O numero 2 é maior que o número 1!')
}
if(numero1 < numero2){
console.log('O numero 1 é menor que o número 2!')
}
if(numero2 < numero1){
console.log('O numero 2 é menor que o número 1!')
}
else {
console.log(`erro`)
}


















/*2. Escreva um algoritmo que leia dois números fornecidos pelo usuário e, conforme
o valor deles, exiba uma das seguintes mensagens: “O primeiro número informado
é o maior”, “O segundo número é o maior” ou “Ambos os números são iguais”. 
*/

