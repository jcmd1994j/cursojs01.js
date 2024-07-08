const readlineSync = require('readline-sync');
const distancia= Number (readlineSync.question("Qual a  distância em milhas"));

polegadas=2.54*distancia;
pes=30.48*distancia;
jardas=0.9144*distancia;
milhas=1.60934*distancia;

console.log("Milhas em polegadas ",milhas/polegadas)
console.log("Milhas em polegadas ",milhas/pes)
console.log("Milhas em polegadas ",milhas/jardas)





/*17. Conversão de unidades (milhas para polegadas, pés e jardas) – Escreva um
algoritmo que utilize constantes para armazenar o número de polegadas, pés e
jardas contidas em uma milha (procure essas informações na Internet). Com
essas constantes, esse algoritmo deve pedir ao usuário que informe uma certa
distância em milhas e a converta para polegadas, pés e jardas, as quais devem
ser exibidas junto a um texto explicativo.
*/