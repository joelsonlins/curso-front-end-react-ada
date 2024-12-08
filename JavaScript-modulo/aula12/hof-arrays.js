// Array.prototype.ever(): verificar se todos os elementos de um array seguem uma determinada condição
// retornada pela função

const numeros = [40, 34, 67, 89, 23, 16, 10];
const pessoas = [
  { nome: "Pessoa 1", idade: 34, altura: 1.7 },
  { nome: "Pessoa 2", idade: 25, altura: 1.56 },
  { nome: "Pessoa 3", idade: 46, altura: 1.82 },
];

const todosPositivos = numeros.every((elemento) => elemento > 0);
console.log(todosPositivos);

const maiorDeIdade = pessoas.every((pessoa) => pessoa.idade >= 18);
console.log(maiorDeIdade);

// Array.prototype.some(): Verifica se algum elemento do array torna verdaderira uma determinada
// condição retornada pela função
console.clear();
const numeros2 = [-1, 3, 7, -3, 5];

const algumNegativo = numeros2.some((num)=>num<0)

console.log(algumNegativo)