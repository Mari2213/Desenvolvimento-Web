function mudarCor() {
  document.getElementById("font").style.color = "red";
}

function mudarCorFundo() {
  let cor = [
    "red",
    "blue",
    "green",
    "yellow",
    "black",
    "purple",
    "orange",
    "pink",
    "brown",
    "gray",
  ];
  let num = Math.floor(Math.random() * cor.length);
  document.getElementById("back").style.background = cor[num];
}
