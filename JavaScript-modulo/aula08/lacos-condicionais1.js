const prompt = require("readline-sync");

// let saldo = Number(prompt.question("Qual eh o seu saldo?"))

// while(saldo < 0){
//   saldo = Number(
//     prompt.require("Saldo inválido! Por favor, informe novamente: ")
//   )
// }

// console.log(saldo)

// Exemplo 2

// let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));

// let somaDasNotas = 0;
// let qtdNotasValidas = 0;

// while (notaDoAluno >= 0) {
//   somaDasNotas = somaDasNotas + notaDoAluno;
//   notaDoAluno = Number(prompt.question("Informe a próxima nota: "));
//   qtdNotasValidas++;
// }

// console.log(somaDasNotas);
// console.log(qtdNotasValidas);

// console.log("Média das notas dos alunos = ", somaDasNotas/qtdNotasValidas)

// Exemplo 3

// const numeroAleatorio = parseInt(Math.random() * 10);
// let qtdTentativas = 1;
// let numeroDoUsuario = Number(
//   prompt.question("informe um numero entre 0 e 10:")
// );
// console.log(numeroAleatorio);
// while (numeroAleatorio !== numeroDoUsuario) {
//   if (numeroAleatorio > numeroDoUsuario) {
//     console.log("O número sorteado eh maior que o seu numero! Tente novamente...");
//     numeroDoUsuario = Number(
//       prompt.question("Informe um numero entre 0 e 10: ")
//     );
//   } else {
//     console.log("O numero sorteado eh menor que o seu numero! Tente novamente...");
//     numeroDoUsuario = Number(
//       prompt.question("Informe um numero entre 0 e 10: ")
//     );
//   }
//   qtdTentativas++;
// }

// console.log(
//   "Parabéns! Você acertou com ",
//   qtdTentativas,
//   "tentativas ! O numero era ",
//   numeroAleatorio
// );

// let contador = 0;

// while (contador < 5) {
//   console.log(contador);
//   if (contador === 2) {
//     break;
//   }
//   contador++;
// }

// * DO-WHILE

let saldo;

do {
  saldo = Number(prompt.question("Informe um saldo valido: ")
  );
} while (saldo < 0);

console.log(saldo);
