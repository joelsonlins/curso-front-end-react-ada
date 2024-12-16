import React from "react";
import "./styles/App.css"
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";


// Componente em classe é uma classe que herda a class Component do React, 
// e retorna HTML dentro do método render.

class App extends React.Component {

  // Método responsável por rederizar o conteúdo HTML do nosso component
  render() {
    return (
      <>
      <Navbar/>
      <Counter/>
      {/* <section id="articles">
      <Article 
      title="COVID-19: What You Need to Know" 
      provider="NASA" 
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit facilis, natus dicta illum rerum ducimus qui et quae eveniet quis at itaque sit, molestias id repellat quibusdam debitis perspiciatis?" 
      imagem="https://siyanclinical.com/wp-content/uploads/2020/06/covid-article.png"/>
      <Article 
      title="What is an article?"
      provider="MEC"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit facilis, natus dicta illum rerum ducimus qui et quae eveniet quis at itaque sit, molestias id repellat quibusdam debitis perspiciatis?" 
      imagem="https://www.worksheetsplanet.com/wp-content/uploads/2023/03/What-is-an-article.jpg"/>
       <Article 
      title="Best programing Languages for Hacking"
      provider="TECH+"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit facilis, natus dicta illum rerum ducimus qui et quae eveniet quis at itaque sit, molestias id repellat quibusdam debitis perspiciatis?" 
      imagem="https://i.ytimg.com/vi/Lc2Uv4_-GZ0/maxresdefault.jpg"/>
      
      </section> */}
      </>
    );
  }
}

export default App;