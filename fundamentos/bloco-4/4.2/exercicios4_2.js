let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()
// console.log(numbers);
for (let number of numbers) {
  console.log(number)
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0
for (index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log(soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = soma / numbers.length;
console.log(media)

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
  console.log(getMaxOfArray(numbers));
