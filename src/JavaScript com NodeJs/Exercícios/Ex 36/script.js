class Conta {
  constructor(saldo) {
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(value) {
    this._saldo = value;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log("Depósito realizado com sucesso!");
    this.visualizarSaldo();
  }

  sacar(valor) {
    if (valor > this._saldo) {
      console.log("Saldo insuficiente!");
      this.visualizarSaldo();
    } else {
      this.saldo -= valor;
    }
  }

  visualizarSaldo() {
    console.log(`Saldo atual: R$ ${this.saldo}`);
  }
}

let conta = new Conta(1000);

conta.sacar(1000);
conta.depositar(500);
conta.sacar(1000);
