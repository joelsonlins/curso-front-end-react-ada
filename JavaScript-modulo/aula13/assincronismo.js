const fs = require("fs");

// *1. Callbacks

// console.log("ANTES da função de ler o arquivo...")

// Função assícrona (ler um arquvo leva um tempo)
// fs.readFile("./JavaScript-modulo/aula13/arquivo.txt", (erro, conteudoDoArquivo) => {
//   if (erro) {
//     console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
//   } else {
//     console.log(String(conteudoDoArquivo));
//   }
// });

// console.log("DEPOIS da função de ler o arquivo...")

// Exemplo 02: setTimeout (função que cria um timer)

// console.log("Antes do setTimeout...")

// setTimeout(()=>{
//   console.log("Isso aqui vai ser executado após 2 segundos!")
// }, 2*1000)

// console.log("Depois do setTimeout...")

// * 2. Promises

console.log("Antes da criação da promise");

// const promessa = new Promise((resolve, reject) => {
//   fs.readFile(
//     "./JavaScript-modulo/aula13/arquivo.txt",
//     (erro, conteudoDoArquivo) => {
//       if (erro) {
//         reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
//       } else {
//         resolve(String(conteudoDoArquivo));
//       }
//     }
//   );
// });

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "./JavaScript-modulo/aula13/arquivo.txt",
      (erro, conteudoDoArquivo) => {
        if (erro) {
          reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
        } else {
          resolve(String(conteudoDoArquivo));
        }
      }
    );
  });
}

// lerArquivoPromise()
//   .then((retornoDoResoleveDaPromse) => {
//     console.log("Deu certo: ", retornoDoResoleveDaPromse);
//   })
//   .catch((erro) => {
//     console.log("Deu ruim: ", erro);
//   })
//   .finally(() => {
//     console.log("Fim da promise");
//   });

// * 3. async/await

async function leituraDeDados() {
  console.log("Isso é executado antes da promise ser resolvida");

  try {
    const dadosDoArquivolido = await lerArquivoPromise(); // espera a promessa ser resolvida para avançar no código
    console.log(dadosDoArquivolido);
    console.log("Isso é executado depois da promise ser resolvida");
  } catch (err) {
    console.log(err);
    console.log("Isso aqui é executado depois da promise (com erro)");
  } finally{
    console.log("Isso aqui é executado independente de ter ou não erro");
  }
}
leituraDeDados();
