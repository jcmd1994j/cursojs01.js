
var  readlineSync  = require ( 'readline-sync' ) ;

let numero = 0;
let soma = 0;

do{
    numero  = Number(readlineSync.question( 'Digite um numero,caso queira parar digite 999' ));
    if(numero != 999){
        soma+=numero;
    }
}while(numero != 999);

console.log(soma);










/*7. Crie um programa que fique lendo repetidamente alguns números fornecidos pelo
usuário. Se o usuário digitar um valor especial definido por você (digamos, zero,
-1 ou 999), o computador deve imprimir a somatória dos números já fornecidos.
Definição: Esse valor especial que sinaliza o fim de um laço é chamado de valor
sentinela. Como esse valor se destina simplesmente a forçar a condição de saída
do laço, em geral ele não é aproveitado na lógica do programa.
*/