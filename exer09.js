const readlineSync = require('readline-sync');
const milhas= Number (readlineSync.question("Quantas milhas jorge percorreu ?"));
const galoes= Number (readlineSync.question("Quantas milhas jorge percorreu ?"));

percorreu=milhas/galoes
/////////modificação
percorreu1=1.60934/3.785

console.log("Valor de galões Jorge gastou :",percorreu,"milhas")
//////////modificação
console.log("Valor de galões que Jorge gastou :",percorreu1,"milhas")












/*9. Consumo de um automóvel – Nos EUA, a unidade de distância é a milha e
unidade de volume para abastecimento é o galão. Assim, o cálculo do consumo
de um carro em milhas por galão (MPG) de um automóvel podem ser calculadas
com a seguinte fórmula:
MPG =
Número de milhas percorridas
Número de galões de gasolina consumidos
A partir dessas informações, crie um algoritmo que solicite ao usuário quantas
milhas um determinado carro percorreu e quantos galões de gasolina ele
consumiu para percorrer essa distância. Com essas informações o algoritmo deve
calcular o consumo do carro em milhas por galão e exibir o resultado obtido na
tela.
Modificação: após construir o algoritmo pedido, modifique-o para que, além de
imprimir o consumo de um automóvel em milhas por galão na tela, ele imprima
também o número de quilômetros por litro. Para fazer essa modificação, leve em
consideração que um galão contém cerca de 3,785 litros e uma milha equivale a
1,60934 quilômetros.
*/