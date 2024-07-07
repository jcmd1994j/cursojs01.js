const readlineSync = require('readline-sync');
const biscoito= Number (readlineSync.question("Quantas receitas de  biscoitos você vai fazer?"));


xicaraAcucar=biscoito*1.5;
xicaraMateiga=biscoito*1;
xicaraFarinha=biscoito*2.75;


console.log("Xicaras de açucar:",xicaraAcucar,"gramas")
console.log("Xicaras de Mateiga:",xicaraMateiga,"gramas")
console.log("Xicaras de Farinha:",xicaraFarinha,"gramas")

















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