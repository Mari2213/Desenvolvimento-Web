class enderecoCliente {
  constructor(rua, bairro, cidade, uf) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
  }

  atualizarEndereco(ruaNova, bairroNovo, cidadeNova, ufNovo) {
    this.rua = ruaNova;
    this.bairro = bairroNovo;
    this.cidade = cidadeNova;
    this.uf = ufNovo;
  }
}

let enderecoMarcos = new enderecoCliente(
  "Rua 1",
  "Bairro 1",
  "Cidade 1",
  "UF 1",
);

enderecoMarcos.atualizarEndereco("Rua 2", "Bairro 2", "Cidade 2", "UF 2");

console.log(enderecoMarcos);
