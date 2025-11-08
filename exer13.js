const readlineSny=require('readline-sync')
const biscoitos=Number(readlineSny.question("Quantos biscoitos forao consumidos?"));



calorias=biscoitos*300;


console.log(`bistoitos consumidos: ${biscoitos}`)

console.log(`Calorias consumidas : ${calorias}`)








/*13. Calorias dos Biscoitos – Um saco de biscoitos contém 40 unidades que, de 
acordo com as informações do rótulo, equivalem a 10 porções. Ainda de acordo 
com o rótulo, uma porção possui 300 calorias. Baseado nessas informações, crie 
um algoritmo que permita ao usuário inserir o número de biscoitos que ele 
consumiu e imprima na tela a quantidade de calorias correspondentes.
*/
