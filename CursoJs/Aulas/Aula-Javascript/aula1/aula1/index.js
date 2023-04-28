
//Não podemos criar variaveis e constantes com palavras reservadas
//Variaveis e constantes precisam ter nomes significativos
//Não podem começar com um número
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não pode modificar o valor de uma variavel ou constante
//Não utilize var, utilize const ou let

const nome = 'Bianca';
const sobrenome = 'Sousa';
const idade = 28;
const peso =65;
const altura = 1.65;

let imc = peso/ (altura*altura);
console.log(imc);
let anoNascimento = 2023-idade;
console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`tem ${altura} de altura e tem um IMC de ${imc}.`); 
console.log(`${nome} nasceu em ${anoNascimento}.`);

// Aula 2

let contador = 1;
contador++
console.log(contador)

contador--
console.log(contador)

//Aula 3 
//parseInt parseFloat
window.confirm('deseja realmente apagar?'); //só aparece no console do navegador