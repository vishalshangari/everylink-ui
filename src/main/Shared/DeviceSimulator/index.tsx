import React from "react";
import styled from "styled-components";

const DeviceSimulator: React.FC = ({ children }) => {
  return (
    <DeviceSimulatorContainer>
      <div className="device-simulator iphone-x">
        <div className="notch">
          <div className="camera"></div>
          <div className="speaker"></div>
        </div>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="bottom-bar"></div>
        <div className="volume"></div>
        <div className="overflow">
          <div className="shadow shadow--tr"></div>
          <div className="shadow shadow--tl"></div>
          <div className="shadow shadow--br"></div>
          <div className="shadow shadow--bl"></div>
        </div>
        <div className="inner-shadow"></div>
        <div className="screen">{children}</div>
      </div>
    </DeviceSimulatorContainer>
  );
};

const DeviceSimulatorContainer = styled.div`
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered};
  width: 100%;
  zoom: 0.85;
  flex-grow: 1;
`;

export default DeviceSimulator;
