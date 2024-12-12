const botaoAumentar = document.querySelector('#aumentar-botao');
const botaoDiminuir = document.querySelector('#diminuir-botao');
const contadorElemento = document.querySelector('#contador');
const input = document.querySelector("#input");

// Inicializamos o valor atual com o valor do texto do contador
let valorAtual = Number(contadorElemento.textContent);

// Atualiza o texto e a cor do contador
function atualizarContador(valor) {
  contadorElemento.textContent = valor;
  contadorElemento.style.color = valor % 2 === 0 ? "blue" : "red";
  contadorElemento.style.backgroundColor = valor % 2 === 0 ? "red" : "blue";
  
}
contadorElemento.style.width = "25px"


// Evento para aumentar o valor
botaoAumentar.addEventListener('click', () => {
  valorAtual++;
  atualizarContador(valorAtual);
  botaoAumentar.classList.add('btn')
  botaoDiminuir.classList.remove('btn')
});

// Evento para diminuir o valor
botaoDiminuir.addEventListener('click', () => {
  valorAtual--;
  atualizarContador(valorAtual);
  botaoDiminuir.classList.add('btn')
  botaoAumentar.classList.remove('btn')
});

// Evento para entrada no input
input.addEventListener('input', () => {
  console.log(input.value);
});


// Manipular classes

console.log(botaoDiminuir.classList)


const themeButton = document.querySelector("#theme")

// Verifica o tema salvo no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});

// Adiciona o evento de clique no botão
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // Salva a escolha do tema no localStorage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});