import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./main/Auth/Login";
import Builder from "./main/Builder";
import PrivateRoute from "./main/Shared/PrivateRoute";
import Test from "./main/Test";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/builder" component={Builder} />
          <Route path="/login" component={Login} />
          <Route path="/test" component={Test} />
          <Route path="/" component={Builder} />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

// Main AppContainer styled component
const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export default App;
