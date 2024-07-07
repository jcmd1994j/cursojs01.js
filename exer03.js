const readlineSync = require('readline-sync');
const nome = readlineSync.question("Qual é seu nome?");
const endereco = readlineSync.question("Qual é seu endereço?");
const cidade = readlineSync.question("Qual é sua cidade?");
const estado= readlineSync.question("Qual é se Estado ?");
const cep = Number (readlineSync.question("Qual é seu Cep?"));
const telefone =Number (readlineSync.question("Qual é seu telefone?"));
const profissao  = readlineSync.question("Qual é sua profissão?");




console.log("nome:",nome);
console.log("Endereço:",endereco);
console.log("Cidade:",cidade);
console.log("Estado:",estado);
console.log("Cep:",cep);
console.log("Telefone:",telefone);
console.log("Profissão:",profissao);
console.log("Endereço Completo:",endereco+" "+cidade+" "+estado+" "+cep);















/*3. Informações Pessoais – Crie um algoritmo que peça ao usuário para informar os
dados abaixo e, depois disso, os imprima na tela:
• Nome;
• Endereço, com cidade, estado e CEP;
• Número de telefone;
• Área de atuação profissiona
*/