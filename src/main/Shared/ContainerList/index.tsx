import React from "react";
import { DndContainer } from "../DndContainer";
import { ElementType } from "../../Builder/models";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../Container";
import { ContainerListProps } from "./models";

export const ContainerList: React.FC<ContainerListProps> = ({
  addElement,
  handleMoveContainer,
  handleFindContainer,
  handleResizeContainer,
  handleMoveElement,
  handleResizeElement,
  handleFindElement,
  containers,
}) => {
  return (
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
              moveContainer={handleMoveContainer}
              findContainer={handleFindContainer}
              resizeContainer={handleResizeContainer}
              moveElement={handleMoveElement}
              resizeElement={handleResizeElement}
              findElement={handleFindElement}
              container={container}
            />
          );
        })}
      </DndContainer>
    </DndProvider>
  );
};
