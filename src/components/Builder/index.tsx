import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import DeviceSimulator from "./DeviceSimulator";
import OptionsTray from "./OptionsTray";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { ViewContainer } from "./ViewContainer";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

type Block = ReactNode;
type AccordionElement = ReactNode;

const InitialElements: Block[] = [];
const InitialAccordionElements: AccordionElement[] = [];

const Builder = () => {
  const [blocks, setBlocks] = useState(InitialElements);
  const [accordionElements, setAccordionElements] = useState(
    InitialAccordionElements
  );

  const addBlock = () => {
    console.log(blocks);
    setBlocks([
      ...blocks,
      <Box key={blocks.length} data-grid={{ x: 0, y: 0, h: 10, w: 12 }} />,
    ]);
    console.log(accordionElements);
    setAccordionElements([
      ...accordionElements,
      <StyledAccordionItem key={accordionElements.length}>
        <StyledAccordionItemHeading>
          <StyledAccordionItemButton>
            <AccordionPointer>
              <AccordionItemState>
                {(state: Record<string, unknown>): React.ReactNode =>
                  state.expanded ? <GoTriangleDown /> : <GoTriangleRight />
                }
              </AccordionItemState>
            </AccordionPointer>
            <span>Container {accordionElements.length + 1}</span>
          </StyledAccordionItemButton>
        </StyledAccordionItemHeading>
        <StyledAccordionItemPanel>
          This is the description of container {accordionElements.length + 1}
        </StyledAccordionItemPanel>
      </StyledAccordionItem>,
    ]);
  };

  return (
    <BuilderContainer>
      <ViewContainer>
        <DeviceSimulator>{blocks}</DeviceSimulator>
      </ViewContainer>
      <OptionsTray addBlock={addBlock} accordionElements={accordionElements} />
    </BuilderContainer>
  );
};

const StyledAccordionItem = styled(AccordionItem)`
  border-bottom: ${(props) => props.theme.borders.dashboard};
`;

const StyledAccordionItemHeading = styled(AccordionItemHeading)`
  line-height: 1rem;
  div {
    display: flex;
  }
  button {
    outline: none;
  }
  padding: ${(props) => props.theme.padding.halfBase} 0;
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  outline: none;
`;

const AccordionPointer = styled.div`
  width: ${(props) => props.theme.padding.base};
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered}
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 0 ${(props) => props.theme.padding.base}
    ${(props) => props.theme.padding.halfBase};
  animation: fadein 0.35s ease-in;
`;

const Box = styled.div`
  background: ${(props) => props.theme.color.popstar};
`;

const BuilderContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.color.deepPurple};
`;

export default Builder;
