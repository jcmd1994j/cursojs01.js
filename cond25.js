const readlineSync = require("readline-sync");

// Função para verificar se o ano é bissexto
function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Função para verificar se a data é válida
function dataValida(dia, mes, ano) {
    // Verifica o mês
    if (mes < 1 || mes > 12) {
        return false;
    }

    // Verifica o dia
    const diasPorMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (dia < 1 || dia > diasPorMes[mes - 1]) {
        return false;
    }

    return true;
}

// Leitura dos dados
const dia = Number(readlineSync.question("Digite o dia: "));
const mes = Number(readlineSync.question("Digite o mês: "));
const ano = Number(readlineSync.question("Digite o ano: "));

// Verifica se a data é válida
if (dataValida(dia, mes, ano)) {
    console.log(`A data ${dia}/${mes}/${ano} é válida.`);
} else {
    console.log(`A data ${dia}/${mes}/${ano} não é válida.`);
}
/*25. Escreva um programa que peça ao usuário para fornecer um dia, mês e o ano arbitrários
e determine se esses dados correspondem a uma data válida. Não deixe de considerar
que existem meses com 30 e 31 dias, e que fevereiro pode ter 28 ou 29 dias,
dependendo se o ano for bissexto. Considere que um ano é bissexto quando for divisível
por 4, com exceção dos anos centenários (aqueles que são divisíveis por 100, como
1700, 1800, etc).
*/