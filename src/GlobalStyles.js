import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        min-height: 100vh;
        line-height: 1.6;
        font-family: 'Noto Sans', sans-serif; 
        letter-spacing: -0.035em;
        overflow: scroll;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }
`;

export default GlobalStyles;
