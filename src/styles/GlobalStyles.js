import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transi

    html, body {
      height: 100%;
      width: 100%;
      overflow-x: hidden;
    }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Ensures the body itself is centered */
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;
