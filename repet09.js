var  readlineSync  = require ( 'readline-sync' ) ;
 

let sexo=0
let altura=0


//altura dos homens -+ 
let alturaHMais=0
let alturaHMenos=0
//altura de mulheres
let alturamMais=0
let alturamMenos=0


//sexo homens
let sexoMaculino=0


//sexo mulheres
let sexoFeminino=0

 console.log('Altura abaixo de 0 sair do programa!')
do{
    sexo=(readlineSync.question('Qual é seu sexo?'))
    altura=Number(readlineSync.question('Qual é sua altura?'));
    
 if(sexo == "Feminino"){
  sexoFeminino+=1;
 
  if (altura >= 1.60){
 alturamMais+=1;

  }else if(altura < 1.60){
  alturamMenos-=1;
  }
  }

if(sexo == "Masculino"){

    sexoMaculino +=1;
   
    if (altura >= 1.73){
   alturaHMais+=1;
  
    }else if(altura < 1.73){
    alturaHMenos-=1;
    }
  }
}while(altura >= 0);

  // Resultado da pesquisa de homens
  console.log('Quantidade de sexo mascolino que fizerao parte da pesquisa " '+sexoMaculino,'"');
  console.log('"'+alturaHMenos,'" Abaixo da media');
  console.log('"'+alturaHMais,'" Acima da media');
  
  // Resultado da pesquisa de mulheres 
  
  console.log('Quantidade de sexo Feminino que fizerao parte da pesquisa " '+sexoFeminino,'"');
  console.log('"'+alturamMenos,'" Abaixo da media');
  console.log('"'+alturamMais,'" Acima da media');









/*9. Contagem de alturas – Crie um programa que leia continuamente a altura e o
sexo de uma lista de pessoas, até que uma altura negativa seja fornecida. Ao final,
sabendo que a média de altura para as mulheres brasileiras é de 1.60 m e a dos
homens brasileiros é de 1.73 m, escreva as seguintes informações:
a) quantas mulheres da lista estão acima da média nacional de altura para
mulheres, e quantas estão abaixo;
b) quantos homens da lista estão acima da média nacional de altura para
homens, e quantos estão abaixo.
*/