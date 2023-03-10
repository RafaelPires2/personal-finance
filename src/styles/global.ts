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

    body, input, textarea, button, a {
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        list-style: none;
        color: inherit;
    }

    body{
        color: ${(props) => props.theme.var5};
    }
`;
