import React, { useState } from "react";
import styled from "styled-components";
import { devices } from "./constants";

const DeviceSimulator: React.FC = ({ children }) => {
  const [device, setDevice] = useState(devices[1]);
  const [orientation, setOrientation] = useState("portrait");

  const rotateDevice = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (device.width === device.height) {
      return;
    }
    setOrientation(orientation === "portrait" ? "landscape" : "portrait");
  };

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

const SelectContainer = styled.div`
  ${(props) => props.theme.flex.row}
  ${(props) => props.theme.flex.centered}
  width: 100%;
  height: 10%;
`;

const GridContainer = styled.div<{
  width: number;
  height: number;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: white;
  overflow: hidden;
  padding: ${(props) => props.theme.padding.halfBase};
  border-radius: 2px;
`;

const FrameContainer = styled.div`
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered}
  width: 100%;
  height: 90%;
`;

const DeviceSimulatorContainer = styled.div`
  position: relative;
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered};
  width: 100%;
  zoom: 0.85;
  flex-grow: 1;
`;

export default DeviceSimulator;
