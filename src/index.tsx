import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyle } from "./style-util/global";
import AppRouter from "./router/app-router";



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
