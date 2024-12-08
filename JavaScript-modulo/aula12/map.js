// map
// Ele cria um novo array que possui o *mesmo tamanho do array original*
// compost pelos elementos que goram retornados a cada iteração

const numeros = [40, 34, 67, 89, 23, 16, 10];

const novoArray = numeros.map((elemento) => {
  return elemento * 2;
});

// Exemplo 1: Elevando todos os números ao quadrado
console.clear();
const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const newValores = valores.map((num) => {
  return Math.pow(num, 2);
});

console.log(newValores);
console.clear();

// Exemplo 2: Adicionando uma propriedade aos objetos do array

const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];
const carrinhoComTotal = carrinho.map((itemDoCarrinho)=>{
  return{
    ...itemDoCarrinho,
    total: parseFloat((itemDoCarrinho.preco * itemDoCarrinho.quantidade).toFixed(2))
  }
})

console.log(carrinhoComTotal)

// Desestruturação ou spread

// const pessoa = {
//   nome: "João",
//   idade: 30,dddddddd
//   altura: 1.77,
// };
// const pessoaComPeso = {
//   ...pessoa,
//   peso: 79,
// };

// console.log(pessoa);
