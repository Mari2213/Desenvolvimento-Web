let age = prompt("Digite a sua idade: ");
let temTitulo = confirm("Você tem título de eleitor?");
let idadeMinima = 18;

if (age >= idadeMinima && temTitulo) {
  alert("Você pode votar!");
} else if (age >= idadeMinima && !temTitulo) {
  alert("Você pode votar, mas não tem título de eleitor.");
} else {
  alert("Você não pode votar.");
}
