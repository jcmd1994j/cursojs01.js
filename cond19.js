const readlineSync= require ("readline-sync");
const numeroA=Number (readlineSync.question("Qual número A?"));
const numeroB=Number (readlineSync.question("Qual número B?"));

if(numeroA < numeroB){
    console.log("número A é menor que o numero B!")
}
else{
    console.log("erro!")
}















/*19. Faça um algoritmo que leia dois números inteiros e os armazene em duas variáveis
inteiras, digamos, nrA e nrB. Após compará-las, o algoritmo tem que garantir que
o menor valor fique armazenado em nrA e o maior em nrB.
*/