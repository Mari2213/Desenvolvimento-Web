function formatMoney(value) {
  value = Math.ceil(value * 100) / 100; // arredondar para 2 casas decimais (ceil arredonda para cima
  value = value.toFixed(2);
  return "$" + value;
}

function formatSplit(value) {
  if (value === "1") return value + " person";
  return value + " people";
}

function update() {
  let bill = Number(document.getElementById("yourBill").value);
  let tip = document.getElementById("tipInput").value;
  let people = document.getElementById("splitInput").value;

  let tipValue = bill * (tip / 100); //tipValue
  let newBill = bill + tipValue; // billTotal
  let billPerPerson = newBill / people; // billEach

  document.getElementById("tipPercent").innerHTML = tip + "%";
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  document.getElementById("totalWithTip").innerHTML = formatMoney(newBill);
  document.getElementById("splitValue").innerHTML = formatSplit(people);
  document.getElementById("billEach").innerHTML = formatMoney(billPerPerson);
}
