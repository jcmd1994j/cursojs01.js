const readlineSync = require('readline-sync');
numero1 = 300
numero2 = 100
numero3 = 5
string1 = "Rinoceronte"
string2 = "Zebra"
string3 = "bug"

if(numero1 == 300){ 
    console.log("verdadeiro")
}
else if(numero1 > numero3){
  console.log("verdadeiro")
}
else if(numero1 == string1){ 
    console.log("Ilegal")
}
else if(numero1 == "Um"){ 
    console.log("Falso")
}
else if(numero1 == "trezentos"){
    console.log("falso")
}
else if(numero1 >= 200){
    console.log("verdadeiro")
}
else if(numero1 >= numero2 + numero3){
    console.log("verdadeiro")
}
else if(numero1 > numero2 && numero1 < numero3){
    console.log("falso")
}
else if(numero1 < 100 || numero1 > numero3){
    console.log("verdadeiro")
}
else if(numero1 < 10 || numero3 > 10){
    console.log("verdadeiro")
}
else if(numero1 == 30 && numero2 == 100 || numero3 ==100){
    console.log("falso")
}
if(numero2 < numero3){
    console.log("falso")
}
else if(numero2 <= numero1 / 3){
    console.log("verdadeiro")
}
if( string1 == "Rinoceronte"){
    console.log("verdadeiro")
}
if( string2 == "Dois"){
    console.log("Ilegal")
}
if( string3 != "Rinoceronte"){
    console.log("verdadeiro")
}
else if( string3 != "Rinoceronte" || numero1 > 1000){
    console.log("verdadeiro")
}
else{
    console.log("erro")
}

 
 












/*1. Considere as variáveis abaixo, inicializadas como segue:
numero1 = 300
numero2 = 100
numero3 = 5
string1 = "Rinoceronte"
string2 = "Zebra"
string3 = "bug”
Para cada uma das seguintes expressões booleanas, classifique-a como
Verdadeira, Falsa ou Ilegal.
a. numero1 = numero3 
b. numero1 > numero3 
c. numero2 < numero3 
d. numero1 = string1 
e. numero1 = "Um" 
f. numero1 = "Trezentos"
g. numero1 = "300"
h. string2 = "Dois"
i. string1 = "Rinoceronte"
j. string3 < > "Rinoceronte"
k. string3 < > "Rinoceronte" OU numero1 > 1000
l. numero2 <= numero1 / 3 
m. numero1 >= 200 //
n. numero1 >= numero2 + numero3//
o. numero1 > numero2 E numero1 < numero3//
p. numero1 = 100 OU numero1 > numero3//
q. numero1 < 10 OU numero3 > 10//
r. numero1 = 30 E numero2 = 100 OU numero3 = 100//
*/