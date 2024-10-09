const readlineSync = require("readline-sync");

let nome =readlineSync.question('Qual é seu nome?')
let codigo=Number(readlineSync.question('Qual seu codigo?'))
let compras =Number(readlineSync.question('Valor da compras?'))
let prestacao=Number(readlineSync.question('Quantas prestações de 2 a 36?'))

console.log(`Nome:${nome}`)
console.log(`Codigo do consumidor:${codigo}`)
console.log(`Valor da Compra:${compras}`)
console.log(`Número de Prestações:${prestacao}`)


/*b) Modifique o programa acima para que o usuário seja obrigado a inserir um
número de prestações válido, entre 2 e 36. Ou seja, você deve rejeitar
qualquer entrada que não esteja nessa faixa de valores;*/
  
if (2 <= prestacao <= 36){
console.log('[erro ] Prestação invalida!')
}

   
    
while(prestacao>=36){

}
    

   


















/*10. Aplicativos para a Loja de Móveis Conforto S.A.:
a) Muitas vezes, a Loja Conforto vende seus produtos no crediário para seus
clientes. Escreva um programa para simular uma compra parcelada, que
funcione da seguinte forma: o computador lê o nome do cliente, um código
de cliente (fictício), o valor total da compra e um número de prestações
(que pode variar entre 2 e 36). Ao final, escreva o nome do cliente, seu
número de conta, o valor da compra e o valor de cada prestação. Considere
que não há incidência de quaisquer juros ou encargos;
b) Modifique o programa acima para que o usuário seja obrigado a inserir um
número de prestações válido, entre 2 e 36. Ou seja, você deve rejeitar
qualquer entrada que não esteja nessa faixa de valores;
c) Modifique novamente o programa para que, ao invés de escrever o valor
de todas as prestações na tela, sejam escritos apenas o valor de cada
prestação dos próximos 12 meses (independente de quantas prestações o
cliente escolheu);
d) Modifique uma vez mais o programa para que ele continue pedindo pelos
dados de novas compras até que o código de cliente seja igual a um valor
sentinela definido por você (por exemplo, 0 ou -1).
*/