const readlineSync= require ("readline-sync");
const rg=Number (readlineSync.question("Qual o RG Cliente?"));
const nome=readlineSync.question("Qual o nome do dog?");
const raca=readlineSync.question("Qual a raça do dog?");
const idade=Number (readlineSync.question("Qual idade do dog?"));
const peso=Number (readlineSync.question("Qual o peso do dog?"));

if(8 >= peso){
  calculo50=50;  
  console.log("rg:",rg);
  console.log("NOME DO DOG:",nome);
  console.log("RAÇA DODOG:",raca);
  console.log("IDADE DO DOG:",idade);
  console.log("TAXA:",calculo50,"R$");
  console.log("PESO DO DOG:",peso,"KG");
  

}
else if(8 >= peso > 15){
    calculo70=70;  
    console.log("rg:",rg);
    console.log("NOME DO DOG:",nome);
    console.log("RAÇA DODOG:",raca);
    console.log("IDADE DO DOG:",idade);
    console.log("TAXA:",calculo70,"R$");
    console.log("PESO DO DOG:",peso,"KG");
    
  
}
else if(15 <= peso >= 40){
    calculo100=100;  
    console.log("rg:",rg);
    console.log("NOME DO DOG:",nome);
    console.log("RAÇA DODOG:",raca);
    console.log("IDADE DO DOG:",idade);
    console.log("TAXA:",calculo100,"R$");
    console.log("PESO DO DOG:",peso,"KG");
  
}

else if(peso >= 40){
    calculo125=125;  
    console.log("rg:",rg);
    console.log("NOME DO DOG:",nome);
    console.log("RAÇA DODOG:",raca);
    console.log("IDADE DO DOG:",idade);
    console.log("TAXA:",calculo125,"R$");
    console.log("PESO DO DOG:",peso,"KG");
  
}
else{
    console.log("erro")
}


 




/*12. Um certo petshop também funciona como um hotel para cães. De acordo com a
tabela de preços desse estabelecimento, a taxa semanal para hospedagem é de R$
50.00 para cães com menos de 8 kg, R$ 70.00 para cães que pesem entre 8 e 15
kg inclusive, R$ 100.00 para cães entre 15 e 40 kg e R$ 125.00 para cães com
mais de 40 kg. Construa um algoritmo que leia o RG do proprietário de um cão,
bem como o nome, raça, idade e peso desse cão e, de posse desses dados, exiba
um orçamento contendo todos os dados de entrada e o custo para hospedar o
animal por uma semana.
*/