import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import DeviceSimulator from "./DeviceSimulator";
import OptionsTray from "./OptionsTray";

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
      <MainContainer>
        <DeviceSimulator>{blocks}</DeviceSimulator>
      </MainContainer>
      <OptionsTray addBlock={addBlock} />
    </BuilderContainer>
  );
};

const Box = styled.div`
  border: 1px solid black;
  background: green;
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
