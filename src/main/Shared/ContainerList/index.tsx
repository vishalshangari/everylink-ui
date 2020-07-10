import React from "react";
import { DndContainer } from "../DndContainer";
import { ElementType } from "../../Builder/models";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../Container";
import { ContainerListProps } from "./models";
import styled from "styled-components";

export const ContainerList: React.FC<ContainerListProps> = ({
  addElement,
  handleMoveElement,
  handleResizeElement,
  handleFindElement,
  containers,
}) => {
  return (
    <StyledDndContainer>
      <DndProvider backend={HTML5Backend}>
        <DndContainer
          accept={[ElementType.CONTAINER]}
          moveElement={handleMoveElement}
        >
          {containers.map((container) => {
            return (
              <Container
                key={container.id}
                addElement={addElement}
                moveElement={handleMoveElement}
                resizeElement={handleResizeElement}
                findElement={handleFindElement}
                container={container}
              />
            );
          })}
        </DndContainer>
      </DndProvider>
    </StyledDndContainer>
  );
};

const StyledDndContainer = styled.div`
  background: white;
  width: 100%;
  height: 100%;
`;
