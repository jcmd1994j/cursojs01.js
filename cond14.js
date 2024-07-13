const readlineSync = require("readline-sync");

// Função para verificar se a data é mágica
function ehDataMagica(dia, mes, ano) {
    return dia * mes === ano;
}

// Entrada dos dados
const dia = Number(readlineSync.question("Digite o dia (dd): "));
const mes = Number(readlineSync.question("Digite o mês (mm): "));
const ano = Number(readlineSync.question("Digite o ano (yy): "));

// Verificação se a data é mágica
if (ehDataMagica(dia, mes, ano)) {
    console.log("A data",dia,"/",mes,"/",ano, "é uma data mágica!");
} else {
    console.log("A data",dia,"/",mes,"/",ano, "não é uma data mágica.");
}
















/*4. Uma data no formato dd/mm/yy (ano representado por dois dígitos) é considerada
“mágica” quando o dia multiplicado pelo mês resulta no ano. Esse é o caso de
datas como 9/02/18, 2/09/18, 13/04/52 ou 2/10/20, por exemplo. Sabendo disso,
crie um algoritmo que leia um dia (em formato numérico), mês e ano com dois
dígitos, informando se é uma “data mágica” ou não.
*/