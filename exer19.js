const readlineSync = require('readline-sync');
const ovosun= Number (readlineSync.question("Quatas unidades de ovos você pegou?"));
const ovosduz= Number (readlineSync.question("Quatas duzias de ovos você pegou?"));

calculoUnid=0.45*ovosun;
calculoDuz=3.25*ovosduz;


console.log("Valor de ",ovosun,"ovos","Pagou:",calculoUnid,"R$");
console.log("Valor de ",ovosun,"duzias","Pagou:",calculoDuz,"R$");














/*19. Preço dos ovos – A Granja Donizette vende ovos orgânicos vermelhos por R$
3,25 a dúzia ou R$ 0,45 por unidade avulsa. Sabendo disso, escreva um programa
que solicite ao usuário o número de ovos vendidos a um cliente e exiba o valor
total devido com uma explicação apropriada. Por exemplo, se um cliente
comprou 27 ovos, isso resulta em 2 dúzias e 3 ovos; ou seja: duas dúzias a R$
3,25 por dúzia e três ovos avulsos a 45 centavos cada, totalizando de R$ 7,85.
Nesse caso a explicação seria um texto como “O cliente comprou 27 ovos, o que
equivale a 2 dúzias e 3 ovos. O cliente deve pagar R$ 6,50 pelas 2 duzias e R$
1,35 pelos três ovos”.
*/