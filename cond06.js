

const readlineSync= require ("readline-sync");
const gramas=Number (readlineSync.question("Quantas gramas é a encomenda?"));


const gramas5=1.10;
const kilos2=2.20;
const mais2kilos=3.70;




if(gramas <= 0.05){//gramas linha 4 (pergunta as gramas )se for maior ou igual a 0.05 g é igual 1,10
    console.log("Você vai paga em 500g:",gramas5,"R$")
}
else if(gramas < 0.05 && gramas <=2 ){ //gramas linha 4("linha 14") se for maior a 0.05 e gram. for maior ou igual a dois paga 2,20 
    console.log("Você vai paga em 2kilos:", kilos2,"R$")
}
else if(gramas > 2 && gramas < 10){//linha 4 gramas("linha 14") e gramas for maior 2 e gramas menor q 10 paga 3,70
   console.log("Você vai paga em mais de 2kilos:", mais2kilos,"R$")
}
else if ( gramas >= 10){ // gramas for maior ou igual a 10 e 5,00 + 3,80 de taxa
    calculo=5.00+ 3.80   
    console.log("Mais de 10 kilos é:",calculo,"R$")
}
else{
    console.log("erro")
}


/*6. Crie um algoritmo para uma empresa de transportes que, a partir do peso de uma
encomenda fornecida pelo usuário, calcule o preço da remessa conforme a
seguinte tabela:
Peso da encomenda Valor
500 gramas ou menos R$ 1,10
Mais de 500 gramas, mas não mais que
2 quilos
R$ 2,20
Mais de 2 quilos, mas não mais de 10
quilos
R$ 3,70
Mais de 10 quilos R$ 5,00 mais R$ 3,80/kg pelo peso
que ultrapassar 10 Kg*/
