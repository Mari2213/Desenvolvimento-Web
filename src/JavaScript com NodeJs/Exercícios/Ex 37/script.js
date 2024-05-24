class CarrinhoDeCompras {
  qtdTotal = 0;
  constructor() {
    this.itens = [];
    this.valorTotal = 0;
  }

  adicionar(item, quantidade) {
    const indice = this.itens.findIndex((i) => i.nome === item.nome);
    if (indice !== -1) {
      this.itens[indice].quantidade = quantidade;
    } else {
      this.itens.push({ ...item, quantidade });
    }
    this.qtdTotal += quantidade;
    this.valorTotal += item.preco * quantidade;
  }

  remover(item) {
    const indice = this.itens.findIndex((i) => i.nome === item.nome);
    if (indice !== -1) {
      const qtdRemovida = this.itens[indice].quantidade;
      this.itens.splice(indice, 1);
      this.qtdTotal -= qtdRemovida;
      this.valorTotal -= item.preco * qtdRemovida;
    }
  }

  valorFinal() {
    return this.valorTotal;
  }
}

const carrinho = new CarrinhoDeCompras();

carrinho.adicionar({ nome: "Relogio", preco: 10 }, 2);
carrinho.adicionar({ nome: "Sapato", preco: 20 }, 1);
carrinho.adicionar({ nome: "Camiseta", preco: 30 }, 4);

console.log(carrinho.valorFinal());
console.log(carrinho);

carrinho.remover({ nome: "Sapato", preco: 20 });

console.log(carrinho.valorFinal());
console.log(carrinho);
