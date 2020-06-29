/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Shared/Button";
import TextField from "../../Shared/TextField";
import auth0 from "auth0-js";

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
      <h2>Enter your email to get started</h2>
      <TextField
        color={"red"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={passwordlessStart}>Submit</Button>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export default Login;
