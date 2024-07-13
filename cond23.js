

const readlineSync = require("readline-sync");

// Função para calcular o preço da placa
function calcularPreco(tipoMadeira, numCaracteres, corCaracteres) {
    const valorMinimo = 300;
    const custoAngelin = 150;
    const custoPorCaractere = 15;
    const custoDourado = 60;

    let preco = valorMinimo;

    // Adicional pelo tipo de madeira
    if (tipoMadeira.toLowerCase() === "angelim") {
        preco += custoAngelin;
    }

    // Adicional pelo número de caracteres
    if (numCaracteres > 12) {
        preco += (numCaracteres - 12) * custoPorCaractere;
    }

    // Adicional pela cor dos caracteres
    if (corCaracteres.toLowerCase() === "dourado") {
        preco += custoDourado;
    }

    return preco;
}

// Leitura dos dados
const numeroOrcamento = readlineSync.question("Número do orçamento: ");
const nomeCliente = readlineSync.question("Nome do cliente: ");
const tipoMadeira = readlineSync.question("Tipo de madeira (angelim ou pinus): ");
const numCaracteres = Number(readlineSync.question("Número de caracteres da mensagem: "));
const corCaracteres = readlineSync.question("Cor dos caracteres (branco, preto ou dourado): ");

// Cálculo do preço
const preco = calcularPreco(tipoMadeira, numCaracteres, corCaracteres);

// Exibição dos dados e preço
console.log("Dados do orçamento:");
console.log("Número do orçamento:", numeroOrcamento);
console.log("Nome do cliente:", nomeCliente);
console.log("Tipo de madeira:", tipoMadeira);
console.log("Número de caracteres da mensagem:", numCaracteres);
console.log("Cor dos caracteres:", corCaracteres);
console.log("Preço da placa orçada: R$", preco.toFixed(2));





/*23. Um carpinteiro esculpe placas personalizadas para estabelecimentos comerciais e
deseja um programa que faça orçamentos das placas que produz, considerando as
seguintes informações:
a. O valor mínimo de qualquer placa é de R$ 300,00;
b. Placas de angelim custam R$ 150,00 adicionais, mas placas de pinus não
possuem nenhum custo extra;
c. Frases com até 12 caracteres estão incluídas no valor mínimo; para frases
maiores, são cobrados R$ 15,00 por caractere;
d. Para placas com dizeres brancos ou pretos não se cobra adicional, mas se
ele contiver letras douradas, cobra-se R$ 60,00 a mais.
Baseado nessas informações, construa um algoritmo que leia o número de um
orçamento, o nome do cliente, tipo de madeira (angelim ou pinus), número de
caracteres da mensagem e a cor dos caracteres (branco, preto ou dourado). Ao
final, imprima todos os dados de entrada e o preço da placa orçada.
Após construir esse este algoritmo, tente modificá-lo para que o usuário informe
a mensagem que deverá ser esculpida ao invés do número de caracteres dessa
mensagem. Assim, para que o orçamento seja emitido, o próprio algoritmo deverá
contar quantos caracteres a mensagem contém, o que pode ser feito com a função
length. Por exemplo, se você armazenar a mensagem numa variável chamada
strMensagem, o número de caracteres será dado por length(strMensagem).
*/