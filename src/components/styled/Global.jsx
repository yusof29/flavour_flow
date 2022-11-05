import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* outline: red 1px solid; */
  }

  body {
    font-family: 'Arimo', sans-serif;
    background-color: #cdf0ea;
  }

  ::-webkit-scrollbar {
  display: none;
}

`;

export default GlobalStyles;
