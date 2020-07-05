import React, { useState } from "react";
import styled from "styled-components";
import { devices } from "./constants";

const DeviceSimulator: React.FC = ({ children }) => {
  const [device, setDevice] = useState(devices[0]);
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
      <SelectContainer>
        <select onChange={(e) => setDevice(devices[parseInt(e.target.value)])}>
          {devices.map((device, index) => (
            <option label={device.name} value={index} key={index} />
          ))}
        </select>
        <button onClick={rotateDevice}>Rotate</button>
      </SelectContainer>
      <FrameContainer>
        <GridContainer
          width={orientation === "portrait" ? device.width : device.height}
          height={orientation === "portrait" ? device.height : device.width}
        >
          {children}
        </GridContainer>
      </FrameContainer>
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
`;

export default DeviceSimulator;
