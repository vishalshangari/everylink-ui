import React from "react";
import styled from "styled-components";
import SidePanel from "../Shared/SidePanel";

const Builder = () => {
  return (
    <BuilderContainer>
      <MainContainer>Test</MainContainer>
      <SidePanel side="right" />
    </BuilderContainer>
  );
};

const MainContainer = styled.div`
  height: 100%;
  width: calc(100% - ${(props) => props.theme.width.sidePanelLg});
  background-color: red;
`;

const BuilderContainer = styled.div`
  font-size: 40px;
  height: 100%;
  width: 100%;
`;

export default Builder;
