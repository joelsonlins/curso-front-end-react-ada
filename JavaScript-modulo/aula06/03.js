const prompt = require("readline-sync");

const idade = prompt.question("Qual é a sua idade ?");

const idadeNumber = Number(idade);
console.log(idadeNumber, typeof idadeNumber);

// Coerção Explícita (Conversão Manual)

console.log(Number("X")); // NaN: Not a Number

console.log(String(10), typeof String(10));

console.log(Boolean(2));

// Coerção Implícita

console.log(1 + "1");
console.log(10 - "5");
