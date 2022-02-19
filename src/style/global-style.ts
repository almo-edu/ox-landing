import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html{
        font-family: 'Apple SD Gothic Neo', sans-serif;
        max-width: 100vw;
        min-height: 100vh;
        background-color: #fff;
    }
    body, html{
        padding: 0;
        margin: 0;
    }
    
    @font-face {
        font-family: 'Apple SD Gothic Neo';
        font-weight: 500;
        src: url('./fonts/AppleSDGothicNeoR.woff2') format('woff2');
    }
      
    * {
        box-sizing: border-box;
        font-family: 'Apple SD Gothic Neo', sans-serif;
    }
`
export default GlobalStyle;