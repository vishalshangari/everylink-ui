/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Shared/Button";
import TextField from "../../Shared/TextField";
import auth0 from "auth0-js";
import { WelcomeBg } from "./WelcomeBg";

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

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const LoginWrap = styled.div``;

const MainLogo = styled.div`
  h1 {
    font-size: 6rem;
    color: #fff;
    font-family: ${(props) => props.theme.fonts.brand};
    text-align: center;
    margin-top: 0;
  }
`;

const LoginAction = styled.div`
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  background: rgb(0, 0, 0, 0.5);
  text-align: center;
  min-width: 500px;
  max-width: 100%;

  p {
    color: #fff;
    font-size: 1.25rem;
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 400;
  }
`;

export default Login;
