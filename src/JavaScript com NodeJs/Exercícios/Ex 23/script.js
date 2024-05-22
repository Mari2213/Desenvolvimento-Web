function palavras(palavra) {
  if (palavra.length > 10) {
    return "Texto muito grande";
  } else {
    return "Texto dentro do limite";
  }
}

console.log(palavras("Olá, mundo!"));
console.log(palavras("Desenvolvimento Web"));
console.log(palavras("JavaScript com NodeJs"));
console.log(palavras("Olá"));
console.log(palavras("Marianna"));
