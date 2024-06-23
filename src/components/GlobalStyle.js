import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'KCC-eunyoung';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KCC-eunyoung-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  body {
    font-family: 'KCC-eunyoung';
    background: white;
    display: flex;
  }
  button {
    font-family: 'KCC-eunyoung';
    font-size: 20px;
  }
`;

export default GlobalStyle;