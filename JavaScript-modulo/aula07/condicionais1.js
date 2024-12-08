const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual eh a sua idade? "));

// const ehMaiorDeIdade = idade >= 18;

if (idade >= 18) {
  console.log("Você eh maior de idade!");
} else {
  console.log("Você eh menor de idade");
}

const mediaDoAluno = 8;

if (mediaDoAluno >= 7) {
  console.log("Aprovado ");
} else if (mediaDoAluno < 7 && mediaDoAluno >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}

// 1. Preciso ser maior de idade
// 2. Preciso ter uma CNH (PPD)

const idadeDaPessoa = 18;
const temCNH = true;

if (idadeDaPessoa >= 18 && temCNH) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você não pode dirigir1");
}
