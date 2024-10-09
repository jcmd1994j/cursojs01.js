/*let camiseta = 0; 
for (camiseta; camiseta <= 300; camiseta++) {
  console.log('Frete grátis'); 
}
/*const readlineSync = require("readline-sync");
const camiseta =Number(readlineSync.question("Quantas camisetas você comprou?"))
const pix=Number(readlineSync.question("pagou no pix?"))
 let desco5=camiseta*5/100
 let valorTotal=desco5-camiseta
if(camiseta >= 300){
 console.log("Você comprou mais de :",camiseta," camisetas frete gratis.")
 console.log(`Pagamento em pix Desconto de 5% :${valorTotal}`)
} 
*/

let camiseta = 0;
for (camiseta; camiseta < 300; camiseta++) {
  if (camiseta === 10) {
    console.log("Frete grátis!",camiseta,"camisetas");
  }
}
