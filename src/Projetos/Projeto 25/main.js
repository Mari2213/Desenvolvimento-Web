let num1 = document.getElementById("start");
let num2 = document.getElementById("end");
let output = document.getElementById("output");

function showEvenNumbers() {
  let start = parseInt(num1.value);
  let end = parseInt(num2.value);

  let higherNumber = start > end ? start : end;

  output.innerHTML = "The higher number is: " + higherNumber;
}
