const readlineSync = require("readline-sync");

// Função para verificar se o ano é bissexto
function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Função para calcular a data do próximo dia
function proximoDia(dia, mes, ano) {
    const diasPorMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verifica se o dia é o último dia do mês
    if (dia === diasPorMes[mes - 1]) {
        dia = 1;
        // Verifica se é o último mês do ano
        if (mes === 12) {
            mes = 1;
            ano++;
        } else {
            mes++;
        }
    } else {
        dia++;
    }

    return { dia, mes, ano };
}

// Leitura dos dados
const dia = Number(readlineSync.question("Digite o dia: "));
const mes = Number(readlineSync.question("Digite o mês: "));
const ano = Number(readlineSync.question("Digite o ano: "));

// Calcula a próxima data
const proximaData = proximoDia(dia, mes, ano);

// Exibe a próxima data
console.log("A próxima data é:",proximaData.dia,"/",proximaData.mes,"/",proximaData.ano);












/*26. Construa um algoritmo que leia uma data qualquer (dia, mês e ano) e calcule a
data do próximo dia. Lembre-se que em anos bissextos o mês de fevereiro tem 29
dias. Lembre-se que um ano é bissexto quando for divisível por 4.
*/