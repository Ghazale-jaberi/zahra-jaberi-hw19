import  styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


// html {
//   font-size: 100%;
// }

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.background};
  line-height: 1;
  width: 100%;
}


img{
    width: 200px;
    padding-left: 20px;
    margin-top: 9px;
  }

// `;

export const Contauner = styled.div`
width:100px;

`