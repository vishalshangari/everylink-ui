import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Builder from "./components/Builder";
import PrivateRoute from "./components/Shared/PrivateRoute";
import Test from "./components/Test";
import UserPage from "./components/UserPage";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route path="/user/:id" component={UserPage} />
          <PrivateRoute path="/builder" component={Builder} />
          <Route path="/login" component={Login} />
          <Route path="/test" component={Test} />
          <Route path="/" component={Builder} />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default App;
