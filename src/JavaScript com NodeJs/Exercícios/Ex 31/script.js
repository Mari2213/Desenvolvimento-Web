let nomes = ["Marianna", "Marcos", "Aline", "Maria", "Fernanda", "Mateus"];
let numeros = [33, 245, 63];

function qtdElementos(array) {
  if (array.length < 5) {
    console.log("Poucos elementos");
  } else {
    console.log("Muitos elementos");
  }
}

qtdElementos(nomes);
qtdElementos(numeros);
