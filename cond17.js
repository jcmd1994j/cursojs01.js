const readlineSync= require ("readline-sync");
const romanoNumero=Number (readlineSync.question("Qual o número romano você quer ver de 1 a 10?"));

if(romanoNumero == 1){
  console.log("I")
}
else if(romanoNumero == 2){
    console.log("II")
  }
  else if(romanoNumero == 3){
    console.log("III")
  }
  else if(romanoNumero == 4){
    console.log("IV")
  }
  else if(romanoNumero == 5){
    console.log("V")
  }
  else if(romanoNumero == 6){
    console.log("VI")
  }
  else if(romanoNumero == 7){
    console.log("VII")
  }
  else if(romanoNumero == 8){
    console.log("VIII")
  }
  else if(romanoNumero == 9){
    console.log("IX")
  }
  else if(romanoNumero == 10){
    console.log("X")
  }
  else{
    console.log("erro")
  }



















/*17. Crie um algoritmo que leia um número entre 1 e 10 e exiba o correspondente em
números romanos. Se o número estiver fora do intervalo de 1 a 10, uma mensagem
de erro deverá ser exibida.
*/