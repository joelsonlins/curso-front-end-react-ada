// FILTER

//map: sempre retorna um array de mesmo tamanho do array original
//filter: sempre retorna um array de tamanho igual ou inferior ao tamanho do array original

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const parEncontrado = valores.find((valor) => valor % 2 === 0);
console.log(parEncontrado);

const pares = valores.filter((valor) => valor % 2 === 0);
console.log(pares);

// Exemplo 1 : crie um código que obtenha apenas os dados dos alunos que têm uma média superior a 85.
// Em seguinda, imprima os dados deles na tela.

const alunos = [
  { nome: "Quincy", media: 96 },
  { nome: "Jason", media: 84 },
  { nome: "Alexis", media: 100 },
  { nome: "Sam", media: 65 },
  { nome: "Katie", media: 90 },
];
const notaSuperior = alunos.filter((aluno) => aluno.media > 85);

console.log(alunos);
console.log("");
console.log(notaSuperior);

console.clear();

// Exemplo 2: Crie um script para filtrar apenas pelos produtos que custam menos de R$ 10,00 e não são bebidas

const produtos = [
  { nome: "Suco de laranja", preco: 7.5, tipo: "Bebida" },
  { nome: "Batata frita", preco: 10.5, tipo: "Comida" },
  { nome: "Pizza", preco: 12.49, tipo: "Comida" },
  { nome: "Chocolate", preco: 1.5, tipo: "Comida" },
  { nome: "Pastel", preco: 4.5, tipo: "Comida" },
  { nome: "Coca", preco: 6.99, tipo: "Bebida" },
];

const somenteBebidas = produtos.filter(
  (produto) => produto.preco < 10 && produto.tipo !== "Bebida"
);

console.log(somenteBebidas)