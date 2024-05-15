let numberInput = document.getElementById("number");
let checkButton = document.getElementById("check");
let outputResult = document.getElementById("output");

checkButton.addEventListener("click", () => {
  let number = parseInt(numberInput.value);

  if (number >= 1 && number <= 10) {
    outputResult.innerHTML = "Valid number!";
  } else if (number < 1 || number > 10) {
    outputResult.innerHTML = "Invalid number!";
  } else {
    outputResult.innerHTML = "Please, enter a valid number!";
  }
});
