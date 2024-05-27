class ContaBancaria {
  constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
    this.saldoContaCorrente = saldoContaCorrente;
    this.saldoContaPoupanca = saldoContaPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }

  depositar(valor, conta) {
    if (conta === "corrente") {
      this.saldoContaCorrente += valor;
    } else if (conta === "poupanca") {
      this.saldoContaPoupanca += valor;
    }
  }

  sacar(valor, conta) {
    if (conta === "corrente") {
      if (valor > this.saldoContaCorrente) {
        console.log("Saldo insuficiente");
      }
      this.saldoContaCorrente -= valor;
    } else if (conta === "poupanca") {
      if (valor > this.saldoContaPoupanca) {
        console.log("Saldo insuficiente");
      }
      this.saldoContaPoupanca -= valor;
    }
  }

  transferirParaPoupanca(valor) {
    if (valor > this.saldoContaCorrente) {
      console.log("Saldo insuficiente");
    }
    this.saldoContaCorrente -= valor;
    this.saldoContaPoupanca += valor;
  }

  jurosdeAniversario() {
    let juros = (this.saldoContaPoupanca * this.jurosPoupanca) / 100;
    this.saldoContaPoupanca += juros;
  }

  visualizarSaldos() {
    console.log(`Saldo conta corrente: ${this.saldoContaCorrente}`);
    console.log(`Saldo conta poupança: ${this.saldoContaPoupanca}`);
  }
}

class ContaEspecial extends ContaBancaria {
  constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
    super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca * 2);
  }
}

const contaMarianna = new ContaBancaria(1000, 500, 2);

contaMarianna.depositar(100, "corrente");
contaMarianna.depositar(200, "poupanca");
contaMarianna.visualizarSaldos();
contaMarianna.jurosdeAniversario();
contaMarianna.visualizarSaldos();

// class WordCounter {
//   constructor() {
//     this.words = 0;
//   }
//
//   countWords(sentence) {
//     // let words = sentence.split(" ");
//     // for (const word of words) {
//     //   const lowerCaseWord = word.toLowerCase();
//     //   if (this.words[lowerCaseWord]) {
//     //     this.words[lowerCaseWord]++;
//     //   } else {
//     //     this.words[lowerCaseWord] = 1;
//     //   }
//     // }
//     this.words = sentence.split(/\s+/).length;
//     return this.words;
//   }
// }
//
// //WordCounter should count the number of words in a string
//
// const wordCounter = new WordCounter();
//
// console.log(wordCounter.countWords("O rato roeu a roupa do rei de Roma"));

// class Retangulo {
//   constructor(largura, altura) {
//     this.largura = largura;
//     this.altura = altura;
//   }
//
//   calcularArea() {
//     return this.largura * this.altura;
//   }
//
//   calcularPerimetro() {
//     return 2 * (this.largura + this.altura);
//   }
// }

// class ContaBancaria {
//   constructor(numeroConta, saldo) {
//     this.numeroConta = numeroConta;
//     this.saldo = saldo;
//   }
//
//   depositar(valor) {
//     this.saldo += valor;
//   }
//
//   sacar(valor) {
//     if (this.saldo >= valor) {
//       this.saldo -= valor;
//     } else {
//       console.log("Saldo insuficiente");
//     }
//   }
//
//   consultarSaldo() {
//     return this.saldo;
//   }
// }

// class Voo {
//   constructor(codigoVoo, origem, destino, assentosDisponiveis) {
//     this.codigoVoo = codigoVoo;
//     this.origem = origem;
//     this.destino = destino;
//     this.assentosDisponiveis = assentosDisponiveis;
//   }
//
//   reservarAssento() {
//     if (this.assentosDisponiveis > 0) {
//       this.assentosDisponiveis--;
//     } else {
//       console.log("Não há assentos disponíveis para reserva");
//     }
//   }
//
//   consultarAssentosDisponiveis() {
//     return this.assentosDisponiveis;
//   }
// }

// class Livro {
//   constructor(titulo, autor) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponivel = true;
//   }
//
//   emprestar() {
//     if (this.disponivel) {
//       this.disponivel = false;
//       console.log("O livro foi emprestado.");
//     } else {
//       console.log("Error: O livro não está disponível.");
//     }
//   }
//
//   devolver() {
//     if (!this.disponivel) {
//       this.disponivel = true;
//       console.log("O livro foi devolvido");
//     } else {
//       console.log("Error: O livro já está disponível.");
//     }
//   }
//
//   consultarDisponibilidade() {
//     if (this.disponivel) {
//       console.log("O livro está disponível");
//     } else {
//       console.log("O livro não está disponível");
//     }
//   }
// }

// let fruits = ["apple", "banana", "orange", "grape"];
// let selectedFruits;
//
// switch (fruits.length) {
//   case 0:
//     selectedFruits = "No fruits selected";
//     break;
//   case 1:
//     selectedFruits = fruits[0];
//     break;
//   case 2:
//     selectedFruits = fruits[1];
//     break;
//   default:
//     selectedFruits = fruits[fruits.length - 1];
// }
//
// console.log(selectedFruits);
//
// let sales = [120, 150, 200, 180, 90, 160, 210];
// let total = 0;
//
// for (let i = 0; i < sales.length; i++) {
//   total += sales[i];
// }
//
// let average = total / sales.length;
//
// console.log(average);
//
// let phrase = "eXamPle PhrAse";
// let formattedPhrase = phrase.toLocaleLowerCase().split(" ").join("_");
//
// console.log(formattedPhrase);

// function checkPassed(grade) {
//   const passed = grade.filter((grade) => grade >= 6).length === grade.length;
//   return passed ? "All students passed" : "Not all students passed";
// }
//
// console.log(checkPassed([7, 8, 9, 6]));

// function checkPassed(grade) {
//   const passed = grade.reduce((acc, grade) => acc && grade >= 6, true);
//   return passed ? "All students passed" : "Not all students passed";
// }
//
// console.log(checkPassed([7, 8, 9, 6]));

// let cart = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
//   { id: 3, name: "c" },
// ];
//
// let productIdToRemove = 2;
// let updatedCart = cart.filter((product) => product.id !== productIdToRemove);
//
// console.log(updatedCart);
//
// function Animal() {}
// function Cachorro() {}
// Cachorro.prototype = new Animal();

// function isPalindrome(word) {
//   let reversedWord = word.split("").reverse().join("");
//   return word === reversedWord;
// }
//
// console.log(isPalindrome("arara"));

// const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
//
// console.log("foo.bar@gmail.com =======>", emailRegex.test("foo.bar@gmail.com"));
// console.log(
//   "foo.bar@gmail.com.br ====>",
//   emailRegex.test("foo.bar@gmail.com.br"),
// );
// console.log(
//   "foo.bar@gmail.com.br.br =>",
//   emailRegex.test("foo.bar@gmail.com.br.br"),
// );
// console.log("foo.bar@gmail. ==========>", emailRegex.test("foo.bar@gmail."));
// console.log("foo.bar@gmailcom ========>", emailRegex.test("foo.bar@gmailcom"));
// console.log("foo.bargmail.com ========>", emailRegex.test("foo.bargmail.com"));
// console.log("@gmail.com ==============>", emailRegex.test("@gmail.com"));

// function repeatedStrings(arr) {
//   let counts = {};
//   let reapeated = [];
//   arr.forEach((str) => {
//     counts[str] = (counts[str] || 0) + 1;
//     if (counts[str] > 1) {
//       reapeated.push(str);
//     }
//   });
//   return reapeated;
// }
//
// console.log(
//   repeatedStrings([
//     "a",
//     "b",
//     "a",
//     "c",
//     "b",
//     "a",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//   ]),
// );
