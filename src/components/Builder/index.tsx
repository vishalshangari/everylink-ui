import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import DeviceSimulator from "./DeviceSimulator";
import Dashboard from "./Dashboard";

import { ViewContainer } from "./ViewContainer";

type Block = ReactNode;

const InitialElements: Block[] = [];

const Builder = () => {
  const [blocks, setBlocks] = useState(InitialElements);

  const addBlock = () => {
    console.log(blocks);
    setBlocks([
      ...blocks,
      <Box key={blocks.length} data-grid={{ x: 0, y: 0, h: 10, w: 12 }} />,
    ]);
  };

  return (
    <BuilderContainer>
      <ViewContainer>
        <DeviceSimulator>{blocks}</DeviceSimulator>
      </ViewContainer>
      <Dashboard addBlock={addBlock} />
    </BuilderContainer>
  );
};

const Box = styled.div`
  background: ${(props) => props.theme.color.popstar};
`;

const BuilderContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.color.darkBackground};
`;

export default Builder;
