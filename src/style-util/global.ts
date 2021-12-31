import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  @font-face {
    font-family: Butler-Font;
    src: url("/assets/Gratico-Fonts/Header-font/Butler-ExtraBold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap; }

    @font-face {
        font-family: Graphik;
        src: url("/assets/Gratico-Fonts/Graphik/Graphik-Light.woff") format("woff"), url("/assets/Gratico-Fonts/Graphik/Graphik-Light.woff2") format("woff2");
        font-weight: 300;
        font-style: normal;
        font-display: swap; }
    
    @font-face {
        font-family: Graphik;
        src: url("/assets/Gratico-Fonts/Graphik/Graphik-Regular.woff") format("woff"), url("/assets/Gratico-Fonts/Graphik/Graphik-Regular.woff2") format("woff2");
        font-weight: normal;
        font-style: normal;
        font-display: swap; }

    @font-face {
        font-family: Graphik;
        src: url("/assets/Gratico-Fonts/Graphik/Graphik-Medium.woff") format("woff"), url("/assets/Gratico-Fonts/Graphik/Graphik-Medium.woff2") format("woff2");
        font-weight: 600;
        font-style: normal;
        font-display: swap; }

    h1,h2,h3,h4,h5,h6 {
        font-family: Butler-Font;
    }
    p, a {
        font-family: Graphik;
    }
`;