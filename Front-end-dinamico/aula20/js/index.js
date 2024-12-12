// console.log(document.title)
// console.log(document.URL)

// 1. Pelo nome da tag
const todosH1s = document.getElementsByTagName("h1");
const todosp = document.getElementsByTagName("p");
console.log("Pelo nome da tag", todosH1s[0]);
console.log("Pelo nome da tag", todosp);

// 2. Pelo nome da classe

const todosClasseParagrafo = document.getElementsByClassName("paragrafo");
console.log("Pelo nome da classe: ", todosClasseParagrafo);

// 3. Pelo name

const emailInput = document.getElementsByName("email");
console.log("Pelo name", emailInput);

// 4. Pelo id

const jsLogImg = document.getElementById("js-logo");
console.log("Pelo id", jsLogImg);

// 5. Query Selector

const imagem = document.querySelector("body > img");
console.log("Usando query Selector", imagem);

const paragrafos = document.querySelectorAll("p");
console.log("Usando querySelectorAll", paragrafos);

console.clear(); // Limpando todo conteudo anterior

// Acessando/alterando o conteúdo HTML das tags
const primeiroParagrafo = document.querySelector(".paragrafo");
console.log("textContent: ", primeiroParagrafo.textContent); // captura todo o conteudo interno no formato texto, sem as tags
console.log("innerHTML: ", primeiroParagrafo.innerHTML); // retorna o conteudo selecionado incluindo as tags

primeiroParagrafo.textContent = "Outra coisa"; //altera o conteudo

const segundoParagrafo = document.querySelector("#segundo ");
segundoParagrafo.innerHTML =
  'Este é o <strong style="color:red;">segundo</strong> parágrafo!';

console.clear();

emailInput[0].value = "walisson@email.com";


// Criando elementos na página HTML

const listaUl = document.querySelector('ul#lista')
const listaLis = document.querySelectorAll('ul > li')

const novaTagLi = document.createElement("li"); // criando uma tag li vazia
novaTagLi.textContent = "Segundo item" // adicionando conteúdo na tag li

console.log("Criada com createElement: ",novaTagLi)

//listaUl.appendChild(novaTagLi)

listaUl.insertBefore(novaTagLi, listaLis[1]) // primeiro parâmentro é o que vc quer adicionar e o segundo antes de qual posição seria


listaUl.removeChild(listaLis[0]) // removendo elementos