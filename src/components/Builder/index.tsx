import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Builder = () => {
  const history = useHistory();

  const logout = () => {
    window.localStorage.removeItem("access_token");
    history.push("/login");
  };

  return (
    <BuilderContainer>
      <h1>Welcome to Builder</h1>
      <button onClick={logout}> Log out</button>
    </BuilderContainer>
  );
};

const BuilderContainer = styled.div`
  font-size: 40px;
`;

export default Builder;
