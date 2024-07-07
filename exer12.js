
const readlineSync = require('readline-sync');

acaoCompradas=32.87*1000;
taxac=acaoCompradas*2/100; 
//////////
duasSemanas=33.92*1000; 
taxa2c=duasSemanas*2/100;

console.log("A quantidade de ações compradas",acaoCompradas,"R$");
console.log("O valor de cada ação no momento da compra",taxac,"R$");
console.log("O valor percentual da comissão na compra",acaoCompradas,"R$");
console.log("O valor de cada ação no momento da venda",taxa2c,"R$");
console.log ("O valor percentual da comissão na venda",duasSemanas,"R$");









/*12. Negociação de Ações – No mês passado, José comprou e vendeu algumas ações
das Lojas Pedroso S.A., conforme detalhado abaixo:
a. No total, foram compradas 1000 ações. Naquele momento, José pagou
R$ 32,87 por cada ação;
b. Pela transação que efetuou, José teve que pagar uma taxa de corretagem
de 2% sobre o valor pago pelas ações;
c. Duas semanas depois, José vendeu todas as ações que adquirira por R$
33,92 cada uma;
d. Para poder efetuar a venda, José teve que pagar novamente uma
comissão de 2% do valor da transação.
Crie um algoritmo que imprima na tela as seguintes informações:
a. A quantia que José pagou pelas ações;
b. O valor da comissão que José pagou ao seu corretor quando ele comprou
as ações;
c. A quantia pela qual José vendeu as ações;
d. A quantia de comissão que José pagou ao seu corretor quando ele vendeu
as ações;
e. Mostre a quantia que José ganhou ao vender as ações e pagar o corretor.
Modificação: Após construir esse algoritmo, modifique-o para que o usuário possa
fornecer as seguintes informações:
a. A quantidade de ações compradas;
b. O valor de cada ação no momento da compra;Ministério da Educação
c. O valor percentual da comissão na compra;
d. O valor de cada ação no momento da venda;
e. O valor percentual da comissão na venda.
A partir disso, imprima na tela as mesmas informações como pedido acima.
*/