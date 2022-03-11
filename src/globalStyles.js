import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  * {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

  h1 {
    margin: 0;
    padding: 0;
  }
`
 
export default GlobalStyle