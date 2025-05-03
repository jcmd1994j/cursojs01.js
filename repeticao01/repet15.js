let turmas = ['A', 'B', 'C', 'D'];
let meses = ['Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'];

for (let turma of turmas) {
  for (let mes of meses) {
    console.log(`Turma: ${turma}, Mês: ${mes}, Valor a pagar: 180`);
  }
}
/*
15. A Escolinha Infantil Castelinho Encantado trabalha com o ensino infantil, da pré-
escola ao 9º ano (ou seja, da série 0 a 9, totalizando 10 séries). Para cada série, há
três turmas (“Turma A”, “Turma B” e “Turma C”). As mensalidades da escolinha
são cobradas por 9 meses a cada ano (de março a novembro), que é o período em
que as crianças ficam estudando. Projete um aplicativo que gere os boletos para
cada uma das 30 turmas, de acordo com as seguintes regras:
a) Cada boleto deve conter o número da série (0 a 9), a turma (A, B ou C), o
mês (de 3 a 11) e o valor da mensalidade devida;
b) As mensalidades do jardim de infância custam R$ 180.00 mensais e a das
outras séries custam R$ 160.00 multiplicado pelo nível da série (porMinistério da Educação
exemno segundo ano, a mensalidade custa R$ 160.00 x 2 = R$
320.00).
*/