let checkBtn = document.getElementById("check-btn");
let ageInput = document.getElementById("age-input");

checkBtn.addEventListener("click", function () {
  let age = ageInput.value;
  let message = age >= 18 ? "Você é maior de idade" : "Você é menor de idade";
  let messageElement = document.getElementById("result-message");
  messageElement.innerText = message;
});
