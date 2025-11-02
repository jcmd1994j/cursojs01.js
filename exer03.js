const readlineSync =require('readline-sync')

const nome =readlineSync.question("Qual é seu nome ?");
const endereco=readlineSync.question("Qual é seu endereço?");
const cidade=readlineSync.question("Qual sua cidade ?");
const estado=readlineSync.question("Qual seu estado ?");
const telefone=readlineSync.question("Número de telefone ?");
const profissao=readlineSync.question("Sua profissão ?");

console.log(`Nome:${nome}`)
console.log(`Cidade:${cidade}`)
console.log(`Estado:${estado}`)
console.log(`Telefone:${telefone}`)
console.log(`Profissão:${profissao}`)
console.log(`Endereço:${endereco,+cidade+,+estado+}`)














/*3. Informações Pessoais – Crie um algoritmo que peça ao usuário para informar os 
dados abaixo e, depois disso, os imprima na tela: 
• Nome; 
• Endereço, com cidade, estado e CEP; 
• Número de telefone; 
• Área de atuação profissional.
*/
