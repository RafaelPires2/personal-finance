import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
    }
    :root {
        font-size: 62.5%;
    }

    :focus {
        outline: 0;
    }

    body{
        color: ${(props) => props.theme.var5};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }
`;
