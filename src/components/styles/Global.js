import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
font-family: 'Lato', sans-serif;
font-family: 'Luxurious Roman', cursive;
font-family: 'PT Sans', sans-serif;
font-family: 'Raleway', sans-serif;

*,*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-size: 62.5%;
  font-size: 1rem;
}

`;
export default GlobalStyles;
