const readlineSync= require ("readline-sync");

const produto=Number (readlineSync.question("Qual valor do produto?"));
calculo1=45/100*produto;
calculo2=30/100*produto;

if (50 <= produto){
    console.log("Valor a pagar:",calculo1+produto)
}
else if( 50 >= produto ){
    console.log("Valor a pagar ",calculo2-produto)
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