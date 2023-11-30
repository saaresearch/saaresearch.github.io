import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    -webkit-tap-highlight-color: transparent;
    color: white;
   
  }
  body {
    background-color: rgb(20,20,20);
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    height: 8px;
    padding-top: 4px;
    position: absolute;
    width: 0px;
  }
 
`
export default GlobalStyle;