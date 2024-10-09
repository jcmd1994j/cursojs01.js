const readlineSync=require('readline-sync')
 
const numIn=Number(readlineSync.question('Vamos somar que número?'))

let somaNum=0;

for(let calcular= 1;calcular<=numIn;calcular++){
 somaNum=calcular+somaNum
 console.log(calcular)

if(calcular == numIn ){
 console.log(somaNum)
}



}






/*6. Crie um programa para que retorne o somatório de todos os números entre 1 e um
valor fornecido pelo usuário. Por exemplo, se o usuário fornecer o número 4, o
computador deverá calcular o somatório 1+ 2 + 3 + 4 = 10.
*/