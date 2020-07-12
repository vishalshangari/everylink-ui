import React from "react";
import { DndContainer } from "../DndContainer";
import { ElementType } from "../../Builder/models";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ContainerListProps } from "./models";
import styled from "styled-components";
import { BaseElement } from "../Element";

export const ContainerList: React.FC<ContainerListProps> = ({
  addElement,
  handleMoveElement,
  handleResizeElement,
  handleFindElement,
  selectedElement,
  updateSelectedElement,
  containers,
}) => {
  return (
    <StyledDndContainer>
      <DndGrid />
      <DndProvider backend={HTML5Backend}>
        <DndContainer
          accept={[
            ElementType.TEXTBOX,
            ElementType.BUTTON,
            ElementType.IMAGE,
            ElementType.CONTAINER,
          ]}
          moveElement={handleMoveElement}
        >
          {[...containers].map((container) => {
            return (
              <BaseElement
                element={container}
                key={container.id}
                addElement={addElement}
                moveElement={handleMoveElement}
                resizeElement={handleResizeElement}
                findElement={handleFindElement}
                selectedElement={selectedElement}
                updateSelectedElement={updateSelectedElement}
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

const DndGrid = styled.div`
  display: grid;
  background-size: 10px 10px;
  background-position: -5px -5px;
  background-image: radial-gradient(black 1px, transparent 0);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
