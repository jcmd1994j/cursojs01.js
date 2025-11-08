const readlineSny=require('readline-sync')
const homens=Number(readlineSny.question("Quantos homens na sala de aula?"));
const mulheres=Number(readlineSny.question("Quantos mulheres na sala de aula?"));




porcentagem=homens/mulheres;



console.log(`diferença de porcetagem de homens e mulheres: ${porcentagem} %`)

console.log(`homens : ${homens} 
     mulheres : ${mulheres}`)






/*14. Porcentagens de homens e mulheres numa sala de aula – Crie um algoritmo 
que solicite ao usuário que informe o número de homens e o número de 
mulheres matriculadas numa classe e exiba os percentuais equivalentes a cada 
sexo na tela. 
Exemplo: suponha que existam 8 homens e 12 mulheres em uma classe 
totalizando, portanto, 20 alunos na turma. A porcentagem de homens pode ser 
calculada como 8/20 = 0,4 ou 40% e a porcentagem de mulheres pode ser 
calculada  como 12/20 = 0,6  ou  60%.
*/
