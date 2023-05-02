const hora = 23;

if (hora >= 0 && hora <= 11) {
 console.log ('Bom dia!');
} else if (hora >=12 && hora <=17){
 console.log('Boa tarde!');
} else {
    console.log ('Boa noite!')
}
/*Nesse caso o mais correto seria 
else if (hora >=18 && hora <= 23){
    console.log('Boa noite');
} 
Mas como o intuito é apenas entender as variações optei por deixar dessa forma para meu entendimento

*/