let value = Number(prompt("Entre com preço do produto: "));

if (value >= 20) {
  document.getElementById("result").innerHTML = "Aprovado";
} else {
  document.getElementById("result").innerHTML = "Reprovado";
}
