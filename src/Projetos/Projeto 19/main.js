let randomNumber = Math.floor(Math.random() * 100);
let tries = 0;
//console.log(randomNumber);

function checkGuess() {
  let Guess = Number(document.getElementById("guessInput").value);
  //console.log(Guess);
  let message = document.getElementById("message");
  tries++;
  if (Guess === randomNumber) {
    message.innerHTML = "Parabéns, você acertou!" + " Tentativas: " + tries;
  } else if (Guess > randomNumber) {
    message.innerHTML = "Tente um número menor";
  } else {
    message.innerHTML = "Tente um número maior";
  }
}
