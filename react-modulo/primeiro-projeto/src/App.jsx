import React from "react";
import "./styles/App.css"
import Navbar from "./components/Navbar/Navbar";

// Componente em classe é uma classe que herda a class Component do React, 
// e retorna HTML dentro do método render.

class App extends React.Component {

  // Método responsável por rederizar o conteúdo HTML do nosso component
  render() {
    return (
      <Navbar/>
    );
  }
}

export default App;