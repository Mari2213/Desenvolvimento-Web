let valorConta = 0;
let gorjeta = 0;
let valorTotal = 0;

valorConta = parseFloat(prompt("Qual o valor da conta?"));
gorjeta = parseFloat(prompt("Qual a porcentagem da gorjeta?"));

gorjeta = (valorConta * gorjeta) / 100;
valorTotal = valorConta + gorjeta;

alert(`O valor da gorjeta é de R$ ${gorjeta.toFixed(2)}`);
alert(`O valor total da conta é de R$ ${valorTotal.toFixed(2)}`);
