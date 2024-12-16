import React from "react"

export class Counter extends React.Component{
  constructor(){
    super();
    this.state= {contador: 0}

    console.log("Montagem - Construindo a classe Counter")
  }

  UNSAFE_componentWillMount(){
    console.log("Montagem - O nosso componente contador será montado!")
  }

  componentDidMount(){
    console.log("Montagem - O componente foi montador! ✅")
    document.addEventListener("scroll", this.consoleScroll)

  }

  shouldComponentUpdate(){
    return true;
  }

  UNSAFE_componentWillUpdate(){
    console.log("Atualização - O componente será atualizado!")
  }

  componentDidUpdate(){
    console.log("Atualização - O componente foi atualizado!✅")

    
  }

  componentWillUnmount(){
    console.log("Desmontagem - O componente foi desmontado!")

    document.removeEventListener("scroll",this.consoleScroll)
  }

  consoleScroll(){
    console.log("Rolando a página...")
  }

  render(){
    console.log("Montagem - Renderizando o componente counter...")
    return (

      <div>
        <h1>{this.state.contador}</h1>
        <button onClick={()=>{
          this.setState({contador: this.state.contador - 1})
        }}>Diminuir</button>
        <button onClick={()=>{
          this.setState({contador: this.state.contador + 1})
        }}>Aumentar</button>
      </div>
    )
  }
}