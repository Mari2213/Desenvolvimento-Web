let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxGuesses = 10;

function newGame() {
  window.location.reload();
}

function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1);
  console.log(computerNumber);
}

function compareNumbers() {
  let userNumber = document.getElementById("guessField").value;
  userNumbers.push(" " + userNumber);
  console.log(userNumbers);
  document.getElementById("guesses").innerHTML = userNumbers;

  if (attempts < maxGuesses) {
    if (userNumber > computerNumber) {
      document.getElementById("resultGuess").innerHTML =
        "Seu número é muito alto!";
      document.getElementById("guessField").value = "";
      attempts++;
      document.getElementById("guessesAttempts").innerHTML = attempts;
    } else if (userNumber < computerNumber) {
      document.getElementById("resultGuess").innerHTML =
        "Seu número é muito baixo!";
      document.getElementById("guessField").value = "";
      attempts++;
      document.getElementById("guessesAttempts").innerHTML = attempts;
    } else {
      document.getElementById("resultGuess").innerHTML =
        "Parabéns você acertou!";
      attempts++;
      document.getElementById("guessesAttempts").innerHTML = attempts;
      document
        .getElementById("guessField")
        .setAttribute("Readonly", "Readonly");
    }
  } else {
    document.getElementById("resultGuess").innerHTML =
      "Suas tentativas acabaram! VOCÊ PERDEU! O número era " + computerNumber;
    document.getElementById("guessField").setAttribute("Readonly", "Readonly");
  }
}

/*function encontrarMenorImpar(array) {
  let menorImpar = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0 && array[i] < menorImpar) {
      menorImpar = array[i];
    }
  }
  return menorImpar;
}

console.log(encontrarMenorImpar([5, 7, 9, 11, 13, 15, 17, 19]));*/
