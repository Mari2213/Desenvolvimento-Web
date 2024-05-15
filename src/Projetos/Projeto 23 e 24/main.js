let numberStart = document.getElementById("start");
let numberEnd = document.getElementById("end");
let outputResult = document.getElementById("output");

function evenNumbers() {
  let start = parseInt(numberStart.value);
  let end = parseInt(numberEnd.value);

  let i = start;
  let output = 0;

  while (i <= end) {
    if (i % 2 === 0) {
      output += i + " ";
      outputResult.innerHTML = output;
    }
    i++;
  }
}

let numberStart2 = document.getElementById("start2");
let numberEnd2 = document.getElementById("end2");
let outputResult2 = document.getElementById("output2");

function oddNumbers() {
  let start = parseInt(numberStart2.value);
  let end = parseInt(numberEnd2.value);

  let i = start;
  let output = 0;

  do {
    if (i % 2 !== 0) {
      output += i + " ";
      outputResult2.innerHTML = output;
    }
    i++;
  } while (i <= end);
}
