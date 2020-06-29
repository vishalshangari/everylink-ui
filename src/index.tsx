/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./elements/GlobalStyle";
import { ThemeProvider } from "styled-components";

import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
