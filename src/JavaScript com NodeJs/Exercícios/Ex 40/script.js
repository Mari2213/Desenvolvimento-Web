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

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true;
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false;
      console.log("O livro foi emprestado.");
    } else {
      console.log("Error: O livro não está disponível.");
    }
  }

  devolver() {
    if (!this.disponivel) {
      this.disponivel = true;
      console.log("O livro foi devolvido");
    } else {
      console.log("Error: O livro já está disponível.");
    }
  }

  consultarDisponibilidade() {
    if (this.disponivel) {
      console.log("O livro está disponível");
    } else {
      console.log("O livro não está disponível");
    }
  }
}
