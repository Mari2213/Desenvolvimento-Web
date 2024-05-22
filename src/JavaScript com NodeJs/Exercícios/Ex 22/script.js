function numNegativo(numNegativo) {
  if (numNegativo < 0) {
    return Math.abs(numNegativo);
  } else {
    return "O número não é negativo!";
  }
}

console.log(numNegativo(23));
