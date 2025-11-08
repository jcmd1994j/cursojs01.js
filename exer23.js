const readlineSny=require('readline-sync')
const partidoVerde=Number(readlineSny.question("Quantos votos o Partido Verde tem ?"));
const partidoVermelho=Number(readlineSny.question("Quantos votos o Partido Vermelho tem?"));
const partidoAmarelo=Number(readlineSny.question("Quantos votos o Partido Amarelo tem ?"));


calculoPartidoVerde=partidoVerde*1/100;
calculoPartidoVermelho=partidoVermelho*1/100;
calculoPartidoAmarelo=partidoAmarelo*1/100;


console.log(`Porcentagem dos votos do Partido Verde : ${calculoPartidoVerde} %`);
console.log(`Porcentagem dos votos do Partido Vermelho : ${calculoPartidoVermelho} %`);
console.log(`Porcentagem dos votos do Partido Amarelo : ${calculoPartidoAmarelo} %`);


















/*23. Percentual de votos – Escreva um algoritmo que aceite os nomes de três 
partidos políticos e o número de votos que cada um recebeu na última eleição 
para prefeito. Exibir a porcentagem de votos que cada partido recebeu.
*/
