import { ContainerProps } from "../ContainerElement/models";
import { DndContainer } from "../DndContainer";
import React from "react";
import { Element, ElementType } from "../../Builder/models";
import { ContainerElement } from "../ContainerElement";
import { DndElement } from "../DndElement";
import { TextboxElement } from "../TextboxElement";
import { ButtonElement } from "../ButtonElement";

export interface ElementProps {
  element: Element<ElementType>;
  addElement: (containerId: string, type: ElementType) => void;
  moveElement: (
    id: string,
    { index, left, top }: { index?: number; left?: number; top?: number }
  ) => void;
  findElement: (
    id: string
  ) => {
    index: number;
    parentPath: string;
    parentContainer: Element<ElementType.CONTAINER>;
    elementPath: string;
    element: Element<ElementType>;
  };
  resizeElement: (id: string, width: number, height: number) => void;
  selectedElement: Element<ElementType> | undefined;
  updateSelectedElement: (id: string) => void;
}

export const BaseElement: React.FC<ElementProps> = ({
  element,
  addElement,
  moveElement,
  findElement,
  resizeElement,
  selectedElement,
  updateSelectedElement,
}) => {
  const {
    id: elementId,
    type: elementType,
    position: elementPosition,
    style: elementStyle,
  } = element;
  const {
    height: elementHeight,
    width: elementWidth,
    left: elementLeft,
    top: elementTop,
  } = elementPosition;
  const renderElement =
    elementType === ElementType.TEXTBOX ? (
      <TextboxElement newStyle={elementStyle}>
        textbox{elementId}
      </TextboxElement>
    ) : elementType === ElementType.IMAGE ? (
      <img
        style={{
          backgroundColor: "red",
          width: "100%",
          height: "100%",
        }}
      />
    ) : elementType === ElementType.BUTTON ? (
      <ButtonElement newStyle={elementStyle}>button{elementId}</ButtonElement>
    ) : elementType === ElementType.CONTAINER ? (
      <ContainerElement
        addElement={addElement}
        moveElement={moveElement}
        resizeElement={resizeElement}
        findElement={findElement}
        selectedElement={selectedElement}
        updateSelectedElement={updateSelectedElement}
        container={element as Element<ElementType.CONTAINER>}
      />
    ) : (
      <div>error</div>
    );
  return (
    <DndElement
      id={elementId}
      key={elementId}
      type={elementType}
      width={elementWidth}
      height={elementHeight}
      left={elementLeft}
      top={elementTop}
      moveElement={moveElement}
      findElement={findElement}
      resizeElement={resizeElement}
      selectedElement={selectedElement}
      updateSelectedElement={updateSelectedElement}
    >
      {renderElement}
    </DndElement>
  );
};
