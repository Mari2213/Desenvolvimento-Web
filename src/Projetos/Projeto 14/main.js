let colorList = [];

for (let i = 0; i < 3; i++) {
  let color = prompt("Digite uma cor " + i + ":");
  colorList.push(color);
}

document.getElementById("color").innerHTML = colorList.join(", ");

///alert("A sua lista de cores: " + colorList.join(", "));
