import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Builder from "./components/Builder";
import PrivateRoute from "./components/Shared/PrivateRoute";
import UserPage from "./components/UserPage";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import useDisplaySize from "./hooks/useDisplaySize";
import { DisplaySizeContext } from "./contexts/DisplaySizeContext";

const App = () => {
  const [displaySize, handleDisplaySizeChange] = useDisplaySize();
  const [getNewTheme, currentTheme, handleThemeChange] = useTheme({
    defaultTheme: process.env.REACT_APP_DEV_THEME as string,
    displaySize,
  });

  return (
    <ThemeProvider theme={getNewTheme(currentTheme)}>
      <DisplaySizeContext.Provider value={displaySize}>
        <AppContainer>
          <BrowserRouter>
            <Switch>
              <Route path="/user/:id" component={UserPage} />
              {/* <PrivateRoute path="/builder" component={Builder} /> */}
              <Route path="/login" component={Login} />
              <Route path="/">
                <Builder
                  handleThemeChange={handleThemeChange}
                  currentTheme={currentTheme}
                ></Builder>
              </Route>
            </Switch>
          </BrowserRouter>
        </AppContainer>
      </DisplaySizeContext.Provider>
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
