let calc = {
  soma: (a, b) => a + b,
  subtracao: (a, b) => a - b,
  multiplicacao: (a, b) => a * b,
  divisao: (a, b) => {
    if (b === 0) {
      return "Impossível dividir por 0";
    }
    return a / b;
  },
};

console.log(calc.soma(1, 2));
console.log(calc.subtracao(1, 2));
console.log(calc.multiplicacao(1, 2));
console.log(calc.divisao(1, 2));

// const arr = [1, 2, 3, 4];
//
// let qty = arr.length;
// let el = 3;

// const arr = [];
//
// for (let i = 0; i < 5; i++) {
//   arr.push(i + 5);
// }
//
// console.log(arr);

// function findMaxNumber(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// function sumUniqueNumbers(arr) {
//   let sum = 0;
//
//   let countMap = {};
//
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//
//     if (!countMap[num]) {
//       countMap[num] = 1;
//     } else {
//       countMap[num]++;
//     }
//   }
//
//   for (let num in countMap) {
//     if (countMap[num] === 1) {
//       sum += Number(num);
//     }
//   }
//   return sum;
// }

// function removeDuplicates(arr) {
//   const uniqueSet = new Set(arr);
//
//   const uniqueArr = Array.from(uniqueSet);
//
//   return uniqueArr;
// }
