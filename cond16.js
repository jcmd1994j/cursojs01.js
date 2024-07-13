const readlineSync = require("readline-sync");

// Função para verificar se um ano é bissexto
function isBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Função para verificar se a data é válida
function isDataValida(dia, mes, ano) {
    const diasPorMes = [31, (isBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mes < 1 || mes > 12) {
        return false;
    }
    if (dia < 1 || dia > diasPorMes[mes - 1]) {
        return false;
    }
    return true;
}

// Leitura dos dados
const numeroApolice = Number(readlineSync.question("Número da apólice: "));
const sobrenome = readlineSync.question("Sobrenome do cliente: ");
const nome = readlineSync.question("Nome do cliente: ");
const idade = Number(readlineSync.question("Idade do cliente: "));
const mesVencimento = Number(readlineSync.question("Mês de vencimento do prêmio (1-12): "));
const diaVencimento = Number(readlineSync.question("Dia de vencimento do prêmio: "));
const anoVencimento = Number(readlineSync.question("Ano de vencimento do prêmio: "));
const acidentes = Number(readlineSync.question("Número de acidentes nos últimos 3 anos: "));

// Validação dos dados
let numeroApoliceCorrigido = numeroApolice;
if (numeroApolice < 1000 || numeroApolice > 9999) {
    numeroApoliceCorrigido = 0;
}

let mesVencimentoCorrigido = mesVencimento;
let diaVencimentoCorrigido = diaVencimento;
let anoVencimentoCorrigido = anoVencimento;

if (!isDataValida(diaVencimento, mesVencimento, anoVencimento)) {
    mesVencimentoCorrigido = 0;
    diaVencimentoCorrigido = 0;
    anoVencimentoCorrigido = 0;
}

// Exibição dos dados corrigidos
console.log("Dados da apólice:");
console.log("Número da apólice:", numeroApoliceCorrigido);
console.log("Sobrenome do cliente:", sobrenome);
console.log("Nome do cliente:", nome);
console.log("Idade do cliente:", idade);
console.log("Data de vencimento do prêmio: ",diaVencimentoCorrigido,"/",mesVencimentoCorrigido,"/",anoVencimentoCorrigido);
console.log("Número de acidentes nos últimos 3 anos:", acidentes);



/*16. Uma seguradora comercializa apólices de seguro para automóveis. Crie um
algoritmo para essa seguradora para ler os dados de uma apólice de seguro,
incluindo o número da apólice, sobrenome do cliente, nome do cliente, idade, data
de vencimento do prêmio (mês, dia e ano) e número de acidentes de motorista nos
últimos três anos. Se um número da apólice inserido não estiver entre 1000 e 9999,
defina-a como sendo 0. Se o mês do vencimento não estiver entre 1 e 12 inclusive,
ou o dia não estiver correto para o mês (por exemplo, não entre 1 e 31 para Janeiro
ou 1 e 29 para fevereiro), defina o mês, dia e ano como 0. Após essas críticas,
exiba os dados da apólice.
*/