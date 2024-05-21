let numPrimo = 53;

if (numPrimo > 1) {
  let i = 2;
  for (; i < numPrimo; i++) {
    if (numPrimo % i === 0) {
      console.log(`${numPrimo} não é primo`);
      break;
    }
  }
  if (i === numPrimo) {
    console.log(`${numPrimo} é primo`);
  }
} else {
  console.log(`${numPrimo} não é primo`);
}

// function classificarNumero(num) {
//   let classificacao;
//   if (num > 0 && num % 2 === 0) {
//     classificacao = "Positivo e Par";
//   } else if (num > 0 && num % 2 !== 0) {
//     classificacao = "Positivo e Ímpar";
//   } else if (num < 0) {
//     classificacao = "Negativo";
//   } else {
//     classificacao = "Neutro";
//   }
//   return classificacao;
// }
//
// console.log(classificarNumero(3));
