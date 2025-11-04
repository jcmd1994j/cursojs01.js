const readlineSync=require('readline-sync')
const compras=Number(readlineSync.question("Qual valor das compras ?"));

estadual=compras*4/100;
municipal=compras*2/100;
subtotal=estadual+municipal;


console.log(`Valor das compras : ${compras} R$`);
console.log(`Valor dos impostos Estaduais : ${estadual} R$`);
console.log(`Valor dos impostos Municipais : ${municipal} R$`);
console.log(`Valor do Subtotal das vendas  : ${subtotal} R$`);












/*8. Imposto sobre vendas – Crie um algoritmo que solicite ao usuário que insira o 
valor da compra. O programa deve calcular os impostos de vendas estadual e 
municipal. Suponha que o imposto estadual sobre vendas seja de 4% e o imposto 
estadual sobre vendas seja de 2%. O programa deve exibir o valor da compra, o 
imposto estadual sobre vendas, o imposto municipal sobre vendas, o imposto 
total sobre vendas e o total da venda (que é a soma do valor da compra mais o 
imposto total sobre vendas).  
Lembrete: 2% = 2
 100
 =0,02 e 4% = 4
 100
 =0,04 
 */
