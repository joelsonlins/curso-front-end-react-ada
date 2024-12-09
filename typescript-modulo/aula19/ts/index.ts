// Aula 19 - POO

interface IPessoa {
  nome: string;
  idade:number;
  altura:number;
  dormir: () => void
}

// Classe: abstração
// Definindo a abstração de uma pessoa

class Pessoa implements IPessoa{
  // atributos: característias
  nome: string;
  idade: number;
  altura: number;
  private _cpf:string;

  // método construtor
  constructor(nome: string, idade:number, altura:number, cpf:string){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = cpf;
  }


  // métodos: ação
  dormir () {
    console.log('Dormindo... 😪😪😪')
  }
  
  // accessor: getter
  get cpf():string{
    return this._cpf;
  }

  // accessor: setter
  set cpf(newCpf: string){
    if (newCpf.length !== 14){
      throw new Error('CPF length is incorrect')
    }
    this._cpf = newCpf;
  }

}

class Professor extends Pessoa{
  codigo: string;

  constructor(nome: string, idade: number, altura:number, cpf:string, codigo:string){
    super(nome, idade, altura, cpf);
    this.codigo = codigo;

  }
  ensinar(){
    console.log('Ensinando...👨‍🏫')
  }

}
// Criando uma pessoa a partir da definição da classe Pesoa

const pessoa1 = new Pessoa('Walisson', 27, 1.77,'123.456.789-00')
const pessoa2 = new Pessoa('Carla', 22, 1.65,'123.456.789-02')


console.log(pessoa1)
console.log(pessoa1.nome)

console.log(pessoa2)
pessoa2.dormir()

console.log(pessoa1.cpf)

pessoa1.cpf = "123.456.789-33"
console.log(pessoa1.cpf)

const professor = new Professor('Clotilda', 30, 1.67, '123.456.789-44', '0001')

console.log(professor)

professor.dormir()
professor.ensinar()

// Polimorfismo

console.log(pessoa1 instanceof Pessoa)
console.log(pessoa1 instanceof Professor)
console.log(professor instanceof Pessoa)
console.log(professor instanceof Professor)