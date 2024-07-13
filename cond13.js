const readlineSync = require("readline-sync");

// Funções matemáticas
function sqr(vlNumero) {
    return vlNumero * vlNumero;
}

function sqrt(vlNumero) {
    return Math.sqrt(vlNumero);
}

function sin(vlNumero) {
    return Math.sin(vlNumero);
}

function exp(vlNumero) {
    return Math.exp(vlNumero);
}

// Loop principal do programa
let continuar = true;
while (continuar) {
    // Entrada do número
    const vlNumero = Number(readlineSync.question("Digite um número: "));

    // Exibição do menu
    console.log("Escolha uma operação:");
    console.log("0. Sair do programa");
    console.log("1. Elevar ao quadrado");
    console.log("2. Raiz quadrada");
    console.log("3. Seno");
    console.log("4. Exponencial");

    // Entrada da escolha
    const escolha = Number(readlineSync.question("Digite a sua escolha (0-4): "));

    // Verificação da escolha
    if (escolha === 0) {
        continuar = false;
        console.log("Saindo do programa...");
    } else if (escolha === 1) {
        console.log("Resultado:", sqr(vlNumero));
    } else if (escolha === 2) {
        console.log("Resultado:", sqrt(vlNumero));
    } else if (escolha === 3) {
        console.log("Resultado:", sin(vlNumero));
    } else if (escolha === 4) {
        console.log("Resultado:", exp(vlNumero));
    } else {
        console.log("Erro: escolha inválida.");
        continuar = false;
    }
}
/* 13. Escreva um algoritmo que leia um número e exiba as seguintes opções na tela,
para o usuário escolher uma operação:
1. Elevar ao quadrado;
2. Raiz quadrada;
3. Seno;
4. Exponencial.
Depois que o usuário escolher uma opção digitando um número entre 1 e 4, efetue
a função matemática correspondente. O algoritmo deve verificar se a escolha
fornecida pelo usuário é válida (ou seja, é um número entre 1 e 4); se não for,
então deverá emitir uma mensagem de erro e finalizar.
Assumindo que a variável que você utilizará para armazenar o número que o
usuário informar seja chamada de vlNumero, as seguintes funções para lhe
permitem calcular as funções pedidas:
• sqr(vlNumero) para elevar ao quadrado;
• sqrt(vlNumero) para tirar a raiz quadrada;
• sin(vlNumero) para calcular o seno;
• exp(vlNumero) para calcular uma exponencial.
Após você criar seu algoritmo, modifique-o para incluir a seguinte opção no menu
do usuário:
0. Sair do programa.
*/