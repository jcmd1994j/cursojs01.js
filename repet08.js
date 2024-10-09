var  readlineSync  = require ( 'readline-sync' ) ;

let numero = 0;
let soma = 0;
let media = 0;

      console.log('Deseja sair  do programa digite números abaixo de "0"')
do{
    numero  = Number(readlineSync.question( 'Digite um numero,' ));
         
         if(numero >= 0){
                soma+=numero;
                media++
                 
            }else if (numero < 0){
                console.log('fim do programa');
                console.log('Somatora dos numeros',soma);
                console.log('Media',media/soma);
                console.log('VAlor minimo 0',);
                console.log('Valor maximo ',soma);
                console.log('SAiu do programa')
            }
            
         
}while(numero > 0 );







/*8. Somatório e média de uma lista de números – Construa um programa que
permita a um usuário informar uma série de números, até que um número negativo
seja fornecido. Ao final, imprima o somatório desses números, a média, o valor
máximo e o mínimo. Desconsidere o último número informado pelo usuário.
*/