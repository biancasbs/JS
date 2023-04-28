/*let num1 = prompt('digite seu primeiro número');
let num2 = prompt('digite seu segundo número');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;
alert(`O resultado da soma é ${resultado}`);
*/

//exercicio

let varA = 'A';   // B C A 
let varB = 'B';  
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);