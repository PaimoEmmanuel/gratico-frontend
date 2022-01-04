import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyle } from "./style-util/global";
import AppRouter from "./router/app-router";
import AuthContextProvider from "./contexts/write-story-context";
import TokenContextProvider from "./contexts/edit-token-context";
import ImageFileContextProvider from "./contexts/image-file-context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <TokenContextProvider>
          <ImageFileContextProvider>
            <GlobalStyle />
            <AppRouter />
          </ImageFileContextProvider>
        </TokenContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
