const readlineSny=require('readline-sync')
const produto=Number(readlineSny.question('Qual valor do produto ?'))


calculo30=produto*30/100;
calculo45=produto*45/100;

if(50 > produto ){
    console.log(`Vendido por 45% porque foi MENOR que 50 reias ${calculo45} R$`);
}
else if (50 < produto ){
    console.log(`Vendido por 30 % porque foi MAIOR  que 50 reias ${calculo30} R$`);
}
else {
console.log(`erro`)
}















/*3. Um brechó revende produtos usados, e fixa o preço de venda de cada produto 
conforme o valor de sua aquisição: se o preço de aquisição de um produto é menor 
do de R$ 50.00, ele deve ser vendido por um preço 45% maior; caso contrário, o 
lucro será de 30%. Sabendo disso, construa um algoritmo que leia o valor de 
aquisição de um produto e mostre o seu valor de venda. 
*/

