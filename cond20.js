const readlineSync= require ("readline-sync");
const lado1=Number (readlineSync.question("Qual medida do lado 1 de triangulo?"));
const lado2=Number (readlineSync.question("Qual medida do lado 2 de triangulo?"));
const lado3=Number (readlineSync.question("Qual medida do lado 3 de triangulo?"));


if(lado1 == lado2 && lado1 == lado3){
    console.log("Equilátero ")
// lado 1 isosceles
}
else if((lado1 > lado2 || lado1 > lado3) && (lado2 == lado3)){ 
    console.log("Isósceles")
 }
 else if((lado1 < lado2 || lado1 < lado3) &&(lado2 == lado3)){
    console.log("Isósceles")
 // lado 2 isosceles   
 }
 else if((lado2 < lado1 || lado2 < lado3) && (lado1 == lado3)){
    console.log("Isósceles")
  // lado 3 isosceles  
 }
 else if((lado2 > lado1 || lado2 > lado3) && (lado1 == lado3)){
    console.log("Isósceles")
 }
else if((lado3 < lado1 || lado2 > lado3) && (lado1 == lado2)){
    console.log("Isósceles")
}
else if((lado3 > lado1 || lado2 < lado3) && (lado1 == lado2)){
   console.log("Isósceles")
}
//escaleno lado 1
else if(lado1 > lado2 || lado1 > lado3){
    console.log("Escaleno")
}
else if (lado1 < lado2 || lado1 < lado3){
    console.log("Escaleno")
}
////escaleno lado 2 
else if(lado2 > lado1 || lado2 > lado3){
 console.log("Escaleno")
}
else if(lado2 < lado1 || lado2 < lado3 ){
  console.log("Escaleno")
}
//escaleno lado 3
else if(lado3 > lado2 || lado3 > lado2){
console.log("Escaleno")
}
else if(lado3 < lado2 || lado3 < lado2 ){

}








/*20. Construa um algoritmo que, a partir do valor do comprimento dos três lados de
um triângulo, classifique-o em equilátero, isósceles ou escaleno. Lembre, um
triângulo é equilátero quando o comprimento de todos os seus lados for igual, é
isósceles quando apenas um dos lados tiver comprimento diferente e é escaleno
quando todos os lados tiverem comprimentos diferentes dos demais lados.
*/