const readlineSync = require("readline-sync");
const numero=Number(readlineSync.question('Qual o primeiro numero da tabuada que você quer saber?'))
const numero1=Number(readlineSync.question('Atè qual numero da tabuada  você quer saber ?'))


for(let tabuada=1;tabuada<=numero1;tabuada++){
    console.log(tabuada+"x"+ numero+"=",tabuada*numero);

}




/*3. Escreva um programa que imprima na tela para escrever a tabuada de um número
fornecido pelo usuário, de 1 a 10.
*/