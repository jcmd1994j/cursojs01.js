const readlineSync = require("readline-sync");
const dolar = Number(readlineSync.question("Qual o valor do dólar no câmbio atualmente? ? "));

const moeda1cen = Number(readlineSync.question("Quantas moedas de 1 centavo? "));
const moeda5cen = Number(readlineSync.question("Quantas moedas de 5 centavos?"));
const moeda10cen = Number(readlineSync.question("Quantas moedas de 10 centavos? "));
const moeda25cen = Number(readlineSync.question("Quantas moedas de 25 centavos? "));
const moeda50cen = Number(readlineSync.question("Quantas moedas de 50 centavos?"));

//calculo multiplicado por centavos

const valorDeMoedas=
(moeda1cen * 0.01) +
(moeda5cen * 0.05) +
(moeda10cen * 0.10) +
(moeda25cen * 0.25) +
(moeda50cen * 0.50); 

/// comparo o valor de 1 dolar

const valorNecessario=dolar;

if(valorDeMoedas === valorNecessario){
    console.log("Parabens! Você ganhou o jogo!")
}
else if(valorDeMoedas > valorNecessario){
    console.log("O valor foi maior do que precisava!")
}
else{
    console.log("O valor foi menor do que precisava!")
}










/*8. “Jogo do Dolar” – Construa um algoritmo onde o usuário informa o valor do dólar
no câmbio atual e um certo número de moedas de 1, 5, 10, 25 e 50 centavos de
real. Se o valor total das moedas for o necessário para comprar exatamente um
dolar, o programa deve parabenizar o usuário por ganhar o jogo. Caso contrário,
o programa deve exibir uma mensagem indicando se o valor inserido foi maior ou
menor do que o necessário.
Exemplo: se o dólar estiver a R$ 3.78, e o usuário informar 3 moedas de 1 centavo,
uma de 5 centavos, duas de 10 centavos, duas de 25 centavos e 6 de 50 centavos,
ele ganha o jogo. O mesmo aconteceria se ele informasse 3 moedas de 1 centavo,
13 de 25 centavos e uma de cinquenta centavos. */