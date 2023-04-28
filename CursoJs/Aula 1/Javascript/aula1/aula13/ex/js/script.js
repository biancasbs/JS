const numero = Number(prompt('Digite seu número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Seu número - 2 é igual a ${numero - 2}.</p>`;
texto.innerHTML += `<p>Raiz quadrada é  ${numero ** 0.5} </p>`;
texto.innerHTML += `<p>Seu número é NaN? ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arrendondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arrendondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}.</p>`;

