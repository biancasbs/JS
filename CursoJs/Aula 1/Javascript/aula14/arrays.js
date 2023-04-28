const alunos = ['jesus', 'maria', 'jose'];
//alunos.shift(); retira um elemento do inicio
//alunos.pop(); retira um elemento do final

alunos.push('fernando'); //adciona ao final
alunos.unshift('cleide'); //adciona ao começo
console.log(alunos);

//apenas para saber o que é uma função

/*function saudacao(nome) {

    return `Bom dia, ${nome}!`;
};

const variavel = saudacao('Bianca')
console.log(variavel);

const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(4));

/*abreviar function com arrow function
const raiz = n => n ** 0.5;

console.log(raiz(4));
*/

//valores imutaveis  e mutaveis

/*
valores imutaveis e não acrescidos de outros valores por função ou let 
{NUMBERS, BOOLEANS, STRING, UNDEFINED, NULL }

MUTAVEIS {ARRAYS, OBJECT, FUNCTION}


*/