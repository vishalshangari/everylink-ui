import React from "react";
import styled from "styled-components";
import SidePanel from "../Shared/SidePanel";
import DeviceSimulator from "./DeviceSimulator";

const Builder = () => {
  return (
    <BuilderContainer>
      <MainContainer>
        <DeviceEmulatorContainer>
          <DeviceSimulator>
            <div>TEst</div>
          </DeviceSimulator>
        </DeviceEmulatorContainer>
      </MainContainer>
      <SidePanel side="right" />
    </BuilderContainer>
  );
};

const DeviceEmulatorContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  ${(props) => props.theme.flex.centered};
  width: 100%;
`;

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
