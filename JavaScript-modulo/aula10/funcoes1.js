// function saudacao(nomeDoEstudante="Aluno", curso) {
//   // template string || template literals
//   console.log(`Olá ${nomeDoEstudante}!`)
//   console.log(`Seja bem vindo ao curso de ${curso}!`);
// }
// saudacao("Joelson", "Front-End em React"); // chamada da função

function saudacao(nomeDoEstudante = "Aluno", curso) {
  // template string || template literals
  return `Ola, ${nomeDoEstudante}! Seja bem-vindo(a) ao curso de ${curso}`;
}
const mensagemDaSaudacao = saudacao("Joelson", "Front-End em React"); // chamada da função saudação

console.log(mensagemDaSaudacao);

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 3);
console.log(resultado);
console.log(resultado / 10);

// funções anonimas

const dobroDoNumero = function (numero) {
  return numero * 2;
};

const dobro = dobroDoNumero(2);
console.log(dobro);

// Arrow functions

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploDoNumero = (numero) => numero * 3;
