const form = document.querySelector('#formulario');

form.addEventListener('submit', function(event){
 event.preventDefault();
 console.log('Evento Previnido.');
 setResultado('ola mundo');

});
function setResultado (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p);
}
const imc = peso * altura /2;

if (imc >= 0 && imc <= 18.4){
    console.log('Abaixo do peso');
}
else if (imc >= 18.5 && imc <= 24.9 ){
    console.log('Peso normal');
}
else if (imc >=25 && imc <=29.9){
    console.log('Sobrepeso');
}
else if (imc >= 30 && imc <=34.9){
    console.log('Obesidade grau 1');
}
else if (imc >= 35 && imc <=39.9){
    console.log('Obesidade grau 2');
}
else if (imc >= 40 && imc <= 99.9){
    console.log('Obesidade grau 3');
}
else  {
    console.log('Procure um Médico');
}