// Fetch API

// the/catch
console.log("Requisição usando then/catch");
fetch("https://viacep.com.br/ws/01001000/json/")
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  })
  .catch((erro) => {
    console.log(erro);
  });

// async/await

async function obterDadosDoCep() {
  try {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");

    const dados = await response.json();
    console.log("");
    console.log("Requisição utilizando async/await");
    console.log(dados);
  } catch (erro) {
    console.log("Erro na requisição");
  } finally {
    console.log("Terminou a requisição");
  }
}
obterDadosDoCep();
