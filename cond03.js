const readlineSync=require('readline-sync');

const produto=Number(readlineSync.question("Qual o valor do produto?"))

calculo45=produto*45/100;
calculo30=produto*30/100;


if (50 > produto){
console.log(`O produto será vendido por 45% porque foi abaixo de 50,00 R$ ou seja :${calculo45} R$`)
}
else if( 50 < produto ){
    console.log(`O produto será vendido por 30% de lucro se for um valor de 50,00 R$ ou mais ou seja :${calculo30} R$`)
}



//////











/////
/// > maior
///< menor 
/////


/* 3. Um brechó revende produtos usados, e fixa o preço de venda de cada produto 
conforme o valor de sua aquisição: se o preço de aquisição de um produto é menor 
do de R$ 50.00, ele deve ser vendido por um preço 45% maior; caso contrário, o 
lucro será de 30%. Sabendo disso, construa um algoritmo que leia o valor de 
aquisição de um produto e mostre o seu valor de venda. */
