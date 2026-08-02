import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  button, a {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
`
