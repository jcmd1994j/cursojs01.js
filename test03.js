/*const readlineSync = require("readline-sync");
 
let numeros=([30,40,50,60,70,80,90,100,120,300])
console.log(numeros)

if(numeros>= 300){
console.log(`Valor da camiseta de  ${[numeros]} R$ tem ,FRETE GRÁTIS!`)
}
else if(numeros <= 300 ){
    console.log(`Valor da camiseta de  ${[numeros]} R$ infelismente não temos o FRETE GRÁTIS!`)
}
*/
  
/*let numeros=([30,40,50,60,70,80,90,100,120,300])

 console.log(numeros)
 numeros.sort()

 for(let pos= 0;numeros.length;pos++){
    console.log(`A posição ${pos} tem valor`)
}




/*numeros.sort()
numeros.length
console.log(numeros)
*/
 


/*
const numeros = [30, 40, 50, 60, 70, 80, 90, 100, 120, 300];
console.log(numeros);

for (const pos in numeros) {
    const numero = numeros[pos];
    if (numero === 300) {
        console.log(`A camiseta de ${numero} reais ;- Frete grátis`);
    } else {
        console.log(numero);
    }
}
*/

const numero= [30,40,50,60,70,80,90,100,120,300,1000];
let freteGratis = 0;


for (const preco of numero) {
    if (preco >= 300) {
        freteGratis++;
        console.log('Valor da camisetas:',preco)
    }
}


console.log(`Quantidade de camisetas com frete grátis: ${freteGratis++}`);


