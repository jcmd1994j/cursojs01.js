const readlineSync= require ("readline-sync");
const temperatura=Number (readlineSync.question("Qual a temperatura?"));


if(temperatura <= 15){
    console.log("Muito frio!")
}

else if(temperatura >=16 && temperatura <=23 ){
    console.log("Frio!")

}
else if(temperatura >= 24 && temperatura <= 26){
    console.log("Agradável!")

}
else if(temperatura >=27 && temperatura <= 30){
    console.log("Quente!")

}
else if(temperatura >= 30 ){
    console.log("Muito Quente!")

}
else{
    console.log("erro!")
}












/*15. Faça um algoritmo para ler a temperatura atual e conforme leitura, imprima o
resultado de acordo com a tabela abaixo.
Temperatura
Resultado
até 15º
Muito frio
de 16º a 23º
Frio
de 23º a 26º
Agradável
de 26º a 30º
Quente
acima de 31º
Muito quente
*/


/*Claro, aqui está uma explicação detalhada dos sinais utilizados nas condições:

Operadores de Comparação
<= (menor ou igual a):

Este operador verifica se o valor à esquerda é menor ou igual ao valor à direita.
Exemplo: temperatura <= 15 verifica se a temperatura é menor ou igual a 15.
>= (maior ou igual a):

Este operador verifica se o valor à esquerda é maior ou igual ao valor à direita.
Exemplo: temperatura >= 16 verifica se a temperatura é maior ou igual a 16.
&& (E lógico):

Este operador lógico é usado para combinar duas condições.
Ambas as condições precisam ser verdadeiras para que o resultado combinado seja verdadeiro.
Exemplo: temperatura >= 16 && temperatura <= 23 verifica se a temperatura está entre 16 e 23, inclusive.
*/
