// Objeto Litera

const array = ["Walisson", 27, 1.77, true];

const pessoa = {
  nome: "Walisson",
  idade: 27,
  altura: 1.77,
  ehProgramador: true,
  hobbies: ["jogar FIFA", "Academa", "Ler"],
  imprimirAlgo: () => {
    console.log("Ola");
  },
};
console.log(pessoa);
console.clear();

console.log(pessoa.nome);
console.log(pessoa.hobbies);
console.log(pessoa["idade"]);

pessoa.profissao = "Desenvolvedor";

pessoa.nome = "Walisson Silva";

console.log(pessoa);

delete pessoa.altura;
console.log(pessoa);

pessoa.imprimirAlgo();

const idade = 27;
const altura = 1.77;

const objeto = {
  idade,
  altura,
};
console.log(objeto);

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);