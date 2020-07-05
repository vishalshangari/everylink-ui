/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from "react";
import Button from "../../Shared/Button";
import TextField from "../../Shared/TextField";
import auth0 from "auth0-js";
import {
  WelcomeBg,
  LoginWrap,
  MainLogo,
  LoginAction,
  LoginContainer,
} from "./components";

const Login = () => {
  const [email, setEmail] = useState("");

  const webAuth = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN!,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID!,
    redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI!,
  });

  const passwordlessStart = () => {
    webAuth.passwordlessStart(
      {
        send: "link",
        email,
        connection: "email",
        authParams: {
          responseType: "token id_token",
        },
      },
      (err) =>
        err
          ? alert(err.description!)
          : alert("Check your e-mail for a magic link")
    );
  };

  return (
    <LoginContainer>
      <LoginWrap>
        <WelcomeBg></WelcomeBg>
        <MainLogo>
          <h1>everylink</h1>
        </MainLogo>
        <LoginAction>
          <p>Enter your email to get started</p>
          <TextField
            color="red"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={passwordlessStart}>Submit</Button>
        </LoginAction>
      </LoginWrap>
    </LoginContainer>
  );
};

export default Login;
