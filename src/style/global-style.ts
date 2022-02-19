import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { MAIN_COLOR } from './constants';

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

    .ant-btn {
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.15) 0.6px 0.6px 0.8px;
        :active {
            box-shadow: rgba(0, 0, 0, 0.15) 0.6px 0.6px 0.8px inset;
            border-color: ${MAIN_COLOR};
        }
        outline: none;
    }
    [ant-click-animating-without-extra-node='true']::after{display:none;}

    .ant-btn-default, .ant-btn-ghost {
        :hover, :focus, :active {
            border-color: ${MAIN_COLOR};
            color: ${MAIN_COLOR};
            background-color: #fff;
        }
    }

    .ant-btn-primary {
        background: ${MAIN_COLOR};
        border-color: ${MAIN_COLOR};
        :active, :hover {
            background: ${MAIN_COLOR};
            border-color: ${MAIN_COLOR};
            outline: none;
        }
    }
`
export default GlobalStyle;