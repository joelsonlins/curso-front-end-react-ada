// CSS in TS/JS

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #f7f7f7;
    color: black;
  }

  body, button, input{
    font-family: "Poppins", serif;
  }

  button{
    cursor: pointer;
    transition: 0.3s;

    &:hover{
      filter: brightness(1.2);
      transition: 0.3s;
    }
  }
`