
const readlineSync = require("readline-sync");
const sms = Number(readlineSync.question("Quantos sms ele mandou? "));

const planoBasic = 5.00;
const taxaAdicional1 = 0.05;
const taxaAdicional2 = 0.10;
const imposto = 0.12;

let valorConta = 0;

if (sms <= 60) {
    valorConta = planoBasic;
} else if (sms <= 180) {
    valorConta = planoBasic + (sms - 60) * taxaAdicional1;
} else {
    valorConta = planoBasic + (120 * taxaAdicional1) + (sms - 180) * taxaAdicional2;
}

const valorComImposto = valorConta * (1 + imposto);

console.log("Valor da conta sem imposto: R$", valorConta)
console.log("Valor da conta com imposto: R$", valorComImposto)









/*7. Uma certa operadora de telefonia móvel cobra R$ 5,00 mensais pelo seu plano
básico de transmissão de SMS (mensagens de texto), sendo que taxas adicionais
são cobradas conforme as regras abaixo:
a. As primeiras 60 mensagens estão incluídas no plano básico;
b. Se o usuário mandar mais de 60 mensagens, cada mensagem adicional
custará R$ 0.05, até o limite de 180 mensagens;
c. Acima de 180 mensagens, o valor de cada uma delas passa a R$ 0,10;
d. A soma dos impostos estaduais e federais amonta a 12% do valor de cada
fatura.
Com base nessas informações, crie um algoritmo para ler o número total de
mensagens enviadas por um usuário. Ao final, calcule o valor da conta e mostre
todos os dados, incluindo o valor da conta com e sem impostos.
*/