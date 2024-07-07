const readlineSync = require('readline-sync');
const terra= Number (readlineSync.question("Qual foi o total de terra em m² ?"));

acres=terra*4.046,86
pesQuadrados=terra*43.560 
hectares=terra*0,404686 

console.log("Em acres :",acres,"m²")
console.log("Em pés quadrados :",pesQuadrados,"m²")
console.log("Em hectares:",hectares,"m²")





/*5. Conversor de áreas de terra – Um acre de terra é equivalente a 4.046,86 m2, a
43.560 ft2 (pés quadrados) e a 0,404686 hectares. Crie um algoritmo que solicite
ao usuário que informe a área de um terreno em metros quadrados e mostre as
áreas correspondentes em acres, pés quadrados e hectares.
*/