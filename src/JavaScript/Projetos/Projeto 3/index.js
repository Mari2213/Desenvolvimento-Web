const colors = ["green", "red", "violet", "blue", "grey", "pink", "white"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
