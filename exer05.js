const readlineSync=require('readline-sync')

const terreno=Number(readlineSync.question("Qual valor do terreno em m²?"));

acre=4.04686*terreno;
hectares=0.404686*terreno;
pesQuadrados=43.560*terreno;

console.log(`Valor de Acres em terra :  ${acre} m²`);
console.log(`Valor de Hectares em terra :  ${hectares} hectares`);
console.log(`Valor de Pés Quadrados  em terra :  ${pesQuadrados} ft ²`);




























/*5. Conversor de áreas de terra – Um acre de terra é equivalente a 4.046,86 m2, a 
43.560 ft2 (pés quadrados) e a 0,404686 hectares. Crie um algoritmo que solicite 
ao usuário que informe a área de um terreno em metros quadrados e mostre as 
áreas correspondentes em acres, pés quadrados e hectares. 
*/
