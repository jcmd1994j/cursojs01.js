// Criação de um array com elementos numéricos
let numeros = [10, 20, 30, 40, 50];

// Acessando elementos
console.log(numeros[0]); // 10
console.log(numeros[2]); // 30

// Modificando elementos
numeros[1] = 25; // Agora o segundo elemento é 25
console.log(numeros[1]); // 25

// Adicionando elementos
numeros.push(60); // Adiciona 60 no final do array
console.log(numeros); // [10, 25, 30, 40, 50, 60]

// Removendo elementos
numeros.pop(); // Remove o último elemento
console.log(numeros); // [10, 25, 30, 40, 50]

// Tamanho do array
console.log(numeros.length); // 5

