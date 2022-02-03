const currentHour = 16;
let message;

if (currentHour >= 22) {
  console.log(message = 'Não devériamos comer nada, é hora de dormir');
}
else if (currentHour >= 18 && currentHour < 22) {
  console.log(message = 'Rango da noite, vamos jantar :D');
}
else if (currentHour >= 14 && currentHour < 18) {
  console.log(message = 'Vamos fazer um bolo pro café da tarde?');
}
else if (currentHour >= 11 && currentHour < 14) {
  console.log(message = 'Hora do almoço!!!');
}
else {
  console.log(message = 'Hmmm, cheiro de caférecém passado.');
}


/*
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

----------------------------------------------------------------------
const comida = 'pão na chapa';
const bebida = 'café';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
*/