const readlineSync= require ("readline-sync");
console.log("Escolha cores primarias ")
console.log("azul");
console.log("vermelho");
console.log("amarelo");
console.log("Vamos misturar!");
const cor1= readlineSync.question("Qual primeira cor?");
const cor2= readlineSync.question("Qual 2 cor?");

if (cor1 == 'vermelho' && cor2 == 'azul'){
    console.log("Resultado roxo")

}
else if( cor2 == 'azul' && cor1 == 'vermelho'){
    console.log( "Resultado roxo !")

}
else if(cor1 == 'vermelho' && cor2 == 'amarelo'){
    console.log("Resultado laranja")

}
else if( cor2 == 'amarelo' && cor1 == 'vermelho'){
    console.log("Resoltudo laranja ")

}
else if(cor1 == 'azul' && cor2 == 'amarelo'){
    console.log("Resultado verde")

}
else if(cor2 == 'amarelo' && cor1 == 'azul'){
    console.log("resultado verde")
    
}
else{
    console.log("erro");
}


