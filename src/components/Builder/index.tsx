import React, { useState } from "react";
import styled from "styled-components";
import DeviceSimulator from "./DeviceSimulator";
import OptionsTray from "./OptionsTray";

const INITIAL_PAGE = (
  <div id="pageRoot">
    <div id="pageHeader"></div>
    <div id="pageBody"></div>
    <div id="pageFooter"></div>
  </div>
);

const Builder = () => {
  const [pageContent] = useState(INITIAL_PAGE);

  return (
    <BuilderContainer>
      <MainContainer>
        <DeviceSimulator>{pageContent}</DeviceSimulator>
      </MainContainer>
      <OptionsTray />
    </BuilderContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  height: calc(
    100% - ${(props) => props.theme.padding.base} -
      ${(props) => props.theme.padding.base}
  );
  width: calc(
    100% - ${(props) => props.theme.width.sidePanelLg} -
      ${(props) => props.theme.padding.base} -
      ${(props) => props.theme.padding.base}
  );
  background-color: red;
  padding: ${(props) => props.theme.padding.base};
`;

const BuilderContainer = styled.div`
  font-size: 40px;
  height: 100%;
  width: 100%;
`;

export default Builder;
