// REDUCE

const numeros = [1, 2, 3, 4, 5];

// numeros.reduce((acumulador, elemento, index, arrayCompleto))

const soma = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  console.log(acumulador);
  return elemento / arrayCompleto.length + acumulador;
}, 0);
console.log(soma);

console.clear();
const somaDosPares = numeros.reduce((acumulador, elemento) => {
  if (elemento % 2 === 0) {
    return acumulador + elemento;
  } else {
    return acumulador;
  }
}, 0);
console.log(somaDosPares);

const carrinho = [
  { produto: "Feijão", preco: 7.89, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const totalAPagar = carrinho.reduce((acumulador, item) => {
  return acumulador + item.preco * item.quantidade;
}, 0);

console.log(totalAPagar);
