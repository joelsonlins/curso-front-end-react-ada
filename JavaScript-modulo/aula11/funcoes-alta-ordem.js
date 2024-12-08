//  HIGH ORDER FUNCTIONS

// * 1. Função que retorna outra funcção como parâmetro (Cloujure)

function welcome(courseName) {
  return (studentName) => {
    console.log(`Bem-vindo ao curso de ${courseName}, ${studentName}`);
  };
}

const displayWelcomeToFrontEndCourse = welcome("Fron-end em React");
const displayWelcomeToBackEndCourse = welcome("Back-end em Node.js");

displayWelcomeToFrontEndCourse("João"); // Bem-vindo ao curso de Fron-end

// * 2. Função que recebe outra função como parâmetro

const somar = (num1, num2) => num1 + num2;
const multiplicar = (num1, num2) => num1 * num2;
const subtrair = (num1, num2) => num1 - num2;
const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);
const retorno = calcular(10, 5, somar);
console.log(retorno)

// P cálculo que eu quero é: (num1 * num2) + (2 * num1 * num2)

const resultado = calcular(10,5, (num1, num2)=> num1 * num2 + 2 * num1 * num2)
console.log(resultado)