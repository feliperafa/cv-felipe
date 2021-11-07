import { createGlobalStyle } from 'styled-components';

/*RESET DO CSS INICIO*/
export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #111111;
    color: #00ff7f;
  }
  
  /*RESET DO CSS FIM*/
  
  body,
  input,
  button,
  textarea {
    font: 400 1rem "Roboto", sans-serif;
  }
  html {
    /* a cada 1rem o sistema irá considerar 10px */
    font-size: 62.5%;
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 50%;
    }
  }
  `;
