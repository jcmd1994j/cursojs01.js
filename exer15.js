const readlineSny=require('readline-sync')
const biscoitos=Number(readlineSny.question("Quantos biscoitos vai fazer ?"));



acucar=1.5*biscoitos;
mateiga=1*biscoitos;
farinha=2.75*biscoitos;


console.log(`Para uma receita de  : ${biscoitos} Biscoitos`);
console.log(`É preciso de : ${acucar} xicaras de açucar`)
console.log(`É preciso de : ${mateiga} xicaras de mateiga`)
console.log(`É preciso de : ${farinha} xicaras de farinhar`)
























/*15. Ajustador de Ingredientes – Uma receita de biscoito exige os seguintes 
ingredientes para produzir 48 unidades: 
a. 1,5 xícaras de açúcar 
b. 1 xícara de manteiga 
c. 2,75 xícaras de farinha 
Crie um algoritmo que pergunte ao usuário quantos cookies ele deseja fazer e 
calcule a quantidade correspondente dos ingredientes.  
Exemplo: as quantidades listadas servem para fazer 48 unidades. Se o usuário 
quisesse produzir 96 unidades (ou seja, o dobro de 48) as quantidades dos 
ingredientes devem ser dobradas: 3 xícaras de açúcar, 1 xícara de manteiga e 4,5 
xícaras de farinha. 
*/
