let list = document.getElementById("numberList");

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

for (let i = 1; i <= 5; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = `Item ${i} = ${fruits[i - 1]}`;
  list.appendChild(listItem);
}
