let nota = prompt("Digite a nota do aluno: ");

if (nota > 100) {
  alert("Nota inválida!");
} else if (nota >= 90) {
  alert("Aluno nota A");
} else if (nota >= 80) {
  alert("Aluno nota B");
} else if (nota >= 70) {
  alert("Aluno nota C");
} else if (nota >= 60) {
  alert("Aluno nota D");
} else {
  alert("Aluno nota F");
}
