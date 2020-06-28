import React, { useState, ReactNode } from "react";
import Frame from "react-frame-component";
import styled from "styled-components";
import devices from "./devices";

interface DeviceSimulator {
  children?: ReactNode;
}

const INITIAL_FRAME_CONTENT = `
  <!DOCTYPE html>
  <html>
    <head>${document.head.innerHTML}</head>
    <body>
      <div class="frame-root"></div>
    </body>
  </html>
`;

const DeviceSimulator = ({ children }: DeviceSimulator) => {
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
        <Frame
          initialContent={INITIAL_FRAME_CONTENT}
          style={{
            width: orientation === "portrait" ? device.width : device.height,
            height: orientation === "portrait" ? device.height : device.width,
            background: "white",
          }}
        >
          {children}
        </Frame>
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
