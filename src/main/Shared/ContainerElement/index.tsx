import React from "react";
import { ContainerProps } from "./models";
import { DraggableContainer } from "./components";
import { BaseElement } from "../Element";

export const ContainerElement: React.FC<ContainerProps> = ({
  element,
  moveElement,
  findElement,
  resizeElement,
  addElement,
  selectedElement,
  updateSelectedElement,
}) => {
  const { style } = element;
  return (
    <DraggableContainer newStyle={style}>
      {element.elements?.map((childElement) => (
        <BaseElement
          key={childElement.id}
          element={childElement}
          addElement={addElement}
          moveElement={moveElement}
          findElement={findElement}
          resizeElement={resizeElement}
          selectedElement={selectedElement}
          updateSelectedElement={updateSelectedElement}
        />
      ))}
    </DraggableContainer>
  );
};
