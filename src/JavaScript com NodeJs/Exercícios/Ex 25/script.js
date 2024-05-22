function decremente(numero) {
  for (let i = numero; i >= 0; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

decremente(15);

// function soma(a, b, c) {
//   return a + b + c;
// }
// let result = soma(5, 10, 15);
// console.log(result);

// function faixaEtaria(idade) {
//   if (idade < 12) {
//     return "Criança";
//   } else if (idade <= 24) {
//     return "Jovem";
//   } else {
//     return "Adulto";
//   }
// }
//
// let crianca = faixaEtaria(10);
// let adulto = faixaEtaria(25);
//
// console.log(crianca);
// console.log(adulto);

// function isPalindrome(palavra) {
//   let palavraInvertida = palavra.split("").reverse().join("");
//   if (palavra === palavraInvertida) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// console.log(isPalindrome("arara"));

// function calculateAverage(array) {
//   let soma = 0;
//   for (let i = 0; i < array.length; i++) {
//     soma += array[i];
//   }
//   if (array.length === 0) {
//     return 0;
//   } else {
//     return soma / array.length;
//   }
// }

// function reverseString(string) {
//   return string.split("").reverse().join("");
// }

// function countVowels(string) {
//   let count = 0;
//   let vogais = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < string.length; i++) {
//     if (vogais.includes(string[i].toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// }

// function sumEvenNumbers(array) {
//   let soma = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       soma += array[i];
//     }
//   }
//   return soma;
// }
