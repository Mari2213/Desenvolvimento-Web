let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let operator = document.getElementById("operator");
let calculate = document.getElementById("btn-calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", function () {
  let n1 = Number(number1.value);
  let n2 = Number(number2.value);
  let op = operator.value;
  let res = 0;

  switch (op) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      res = n1 / n2;
      break;
    default:
      res = "Operador inválido";
  }
  result.innerHTML = res;
});
