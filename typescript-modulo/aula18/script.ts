let numero = 20; // Inferência de tipo

const pi = 3.1415;

let nome: string = 'Walisson';

let correa: boolean;

let resultado = numero * pi;

// const nomeDoUsuario = prompt("Qual é o seu nome")

// console.log(nomeDoUsuario?.toLocaleLowerCase())

const numeros: number[] = [1, 2, 3, 4, 5]
// const numeros: Array<number> = [1,2,3,4,5] //Forma antiga

// const misto: (number|string)[] = ['walisson', 24, 1.77]

// ! const misto: any[] = ['Walisson], 27, 7.21, {}, ()={}, true]
// ! Eviet ao máximo utilizar o 'any'!

const idades: number[] = []
idades.push(23)
idades.push(38)
idades.push(12)
idades.push(49)
idades.push(16)

const menoresDeIdade = idades.filter((idade) => idade < 18);

console.log(menoresDeIdade)

const pessoaTupla: [string, number] = ['Walisson', 27]

// Object Types

// interface Person{
//   nome: string;
//   idade: number;
//   profissao?: string; //parâmetro opnional
//   altura: number;
// }

type Person = {
  nome: string;
  idade: number;
  profissao?: string; //parâmetro opnional
  altura: number;
}

const pessoa: Person = {
  nome: 'Walisson',
  idade: 27,
  altura: 1.77
}
pessoa.profissao = 'Desenvolvedor'
console.log(pessoa)

type Criterio = 'greater' | 'lower'

// type aliases
function chooseNumber(numero1: number, numero2: number, criterio?: Criterio): number {
  switch (criterio) {
    case 'greater':
      return numero1 > numero2 ? numero1 : numero2
    case 'lower':
      return numero1 < numero2 ? numero1 : numero2
    default:
      const numeroAleatorio = Math.random();

      if (numeroAleatorio >= 0.5) return numero1;
      return numero2;
  }
}

const numeroEscolhido = chooseNumber(10, 20, 'lower');
console.log("numeroEscolhido: ", numeroEscolhido)

function somar(num1: number, num2: number): number {
  return num1 + num2;
}

// * Utility Types: Permite que vc crie novos tipos a partir de novos tipos já existentes

// 1. Partial

type PersonPartial = Partial<Person> // Torna todos os parâmetros opcionais

// 2. Required

type PersonRequired = Required<Person> // Torna todos os parâmetros obrigatórios

// 3. Pick

type PersonPick = Pick<Person, 'nome' | 'idade'> // Pega apenas os parâmetros escolhidos

// 4. Omit

type PersonOmit = Omit<Person, 'profissao'> // Omite um parâmetro escolhido

// 5. Exclude

type CriterioExclude = Exclude<Criterio, 'greater'> // Elimina um dos parâmetros

// 6. Record

type Pessoas = Record<string, Person>

const pessoas: Pessoas = {
  '123.456.789-00': {
    nome: 'Fulano',
    idade: 20,
    altura: 1.80,
  },
  '123.456.789-02': {
    nome: 'Cicrano',
    idade: 32,
    altura: 1.77,
  },
}