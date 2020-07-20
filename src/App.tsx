import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./main/Auth/Login";
import Builder from "./main/Builder";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import useDisplaySize from "./hooks/useDisplaySize";
import { GlobalStyles } from "./GlobalStyle";

const App = () => {
  const [displaySize] = useDisplaySize();
  const [getNewTheme, currentTheme, handleThemeChange] = useTheme({
    defaultTheme: process.env.REACT_APP_DEV_THEME as string,
    displaySize,
  });

  return (
    <ThemeProvider theme={getNewTheme(currentTheme)}>
      <GlobalStyles />
      <AppContainer>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={() => <Login />} />
            <Route path="/">
              <Builder
                displaySize={displaySize}
                handleThemeChange={handleThemeChange}
                currentTheme={currentTheme}
              ></Builder>
            </Route>
          </Switch>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
};

// Main AppContainer styled component
const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export default App;
