const readlineSync = require("readline-sync");

function jogoDeAdivinhacao(min, max) {
    // Gerar um número aleatório entre min (inclusive) e max (exclusive)
    const numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;
    let tentativas = 0;
    
    console.log("Tente adivinhar o número aleatório entre ",min ,"e" ,max,":");

    while (true) {
        const palpite = Number(readlineSync.question("Digite o seu palpite: "));

        if (palpite === numeroAleatorio) {
            tentativas++;
            console.log("Parabéns! Você acertou o número ",numeroAleatorio ,"em" ,tentativas, "tentativa(s).");
            break;
        } else if (palpite < numeroAleatorio) {
            tentativas++;
            console.log("O seu palpite foi muito baixo. Tente novamente.");
        } else {
            tentativas++;
            console.log("O seu palpite foi muito alto. Tente novamente.");
        }
    }
}

// Exemplo de uso: jogo com números entre 1 e 100
jogoDeAdivinhacao(1, 101);  // O segundo argumento é 101 para incluir o número 100




/*27. Crie um algoritmo para um jogo de adivinhação, onde o usuário tenta adivinhar
um número aleatório gerado pelo computador. Esse número aleatório é inteiro e
não negativo, e deve ser escolhido dentro de uma faixa estabelecida pelo usuário
(por exemplo, o usuário pode estipular que esse número varie entre 0 e 10 ou entre
22 e 48, por exemplo). Após o usuário tentar adivinhar qual foi o número gerado,
o algoritmo deve escrever esse número e dizer se indicar se o palpite do jogador
estava correto, muito alto ou muito baixo.
Dica: Para gerar um número aleatório maior ou igual a zero e menor do que “x”,
utilize a função random(x).
*/