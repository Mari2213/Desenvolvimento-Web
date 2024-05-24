class Car {
  constructor(marca, cor, gasolinaRestante) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
  }

  andar() {
    this.gasolinaRestante -= 10;
    console.log("Andando...");
  }

  abastecer() {
    this.gasolinaRestante += 10;
    console.log("Abastecido!");
  }
}

const carro = new Car("Chevrolet", "Preto", 100);

carro.andar();
console.log(carro.gasolinaRestante);
carro.andar();
carro.andar();
console.log(carro.gasolinaRestante);
carro.abastecer();
