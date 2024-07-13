const readlineSync= require ("readline-sync");
const newtons=Number (readlineSync.question("Qual valor do objeto em newtons ?"));

newtonsObjeto=newtons*9.8;

if(newtons>=1000){
  console.log("Muito pesado!",newtonsObjeto)
}
if(newtons<=10){
    console.log("Muito leve!",newtonsObjeto)
  }
  else{
    console.log("erro")
  }

console.log("Essa foi fácil!")












/*9. Os cientistas medem a massa de um objeto em quilogramas e seu peso em
newtons. O peso em Newtons de um objeto pode ser calculado a partir de sua
massa por meio da seguinte fórmula:
Peso = Massa × 9,8
Crie um algoritmo que leia a massa de um objeto e, em seguida, calcule seu peso.
Se o objeto pesar mais de 1.000 Newtons, exiba uma mensagem indicando que é
muito pesado. Se o objeto pesar menos de 10 Newtons, exiba uma mensagem
indicando que está muito leve.
*/