// * FUNÇÕES DE ALTA ORDEM DE ARRAYS

// 1 Array.prototype.forEach()

const numeros = [40, 34, 67, 89, 23, 10];

numeros.forEach((item, index, arrayCompleto) => {
  console.log(index, item, arrayCompleto);
});
console.clear();
// 2 Array.prototype.find(): útil para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  return numero > 10;
});

console.log(encontrado);

console.clear()
const pessoas = [
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 30 },
];


const maiorDeIdade = pessoas.find((pessoa)=> pessoa.idade > 20)
console.log(maiorDeIdade)

console.clear()
// 3. Array.prototype.findIndex() : muito parecido com o find(), porém retorna o índice do elemento encontrado

const indiceMaiorDeIdade = pessoas.findIndex((pessoa)=> pessoa.idade > 20)
console.log(indiceMaiorDeIdade)