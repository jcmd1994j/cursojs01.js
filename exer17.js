const readlineSny=require('readline-sync')
const milha=Number(readlineSny.question("Quantas milhas será percorrido ?"));


polegadas=milha*63360;
pes=milha*5280;
jardas=milha*2025.37


console.log(`Valor da distância de ${milha} milhas em polegadas : ${polegadas}`)
console.log(`Valor da distância de ${milha} milhas em pés : ${pes}`)
console.log(`Valor da distância de ${milha} milhas em jardas : ${jardas}`)











/*17. Conversão de unidades (milhas para polegadas, pés e jardas) – Escreva um 
algoritmo que utilize constantes para armazenar o número de polegadas, pés e 
jardas contidas em uma milha (procure essas informações na Internet). Com 
essas constantes, esse algoritmo deve pedir ao usuário que informe uma certa 
distância em milhas e a converta para polegadas, pés e jardas, as quais devem 
ser exibidas junto a um texto explicativo. 
*/ 
