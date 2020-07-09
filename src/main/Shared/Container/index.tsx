import React from "react";
import styled from "styled-components";
import { DndElement } from "../DndElement";
import { ElementType } from "../../Builder/models";
import { ContainerProps } from "./models";
import { DndContainer } from "../DndContainer";

export const Container: React.FC<ContainerProps> = ({
  container,
  moveContainer,
  findContainer,
  resizeContainer,
  moveElement,
  findElement,
  resizeElement,
  addElement,
}) => {
  const { id, type, position, style } = container;
  const { width, height, left, top } = position;
  return (
    <DndElement
      acceptDrop={[ElementType.CONTAINER, ElementType.TEXTBOX]}
      id={id}
      width={width}
      height={height}
      left={left}
      top={top}
      type={type}
      moveElementByIndex={moveContainer}
      findElement={findContainer}
      resizeElement={resizeContainer}
    >
      <DraggableContainer newStyle={style}>
        <button
          style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
          onClick={() => addElement(id, ElementType.TEXTBOX)}
        >
          +
        </button>
        <DndContainer accept={[ElementType.TEXTBOX]} moveElement={moveElement}>
          {container.elements.map((element) => {
            const { id, type, position, style } = element;
            const { height, width, left, top } = position;
            switch (type) {
              case ElementType.TEXTBOX:
                return (
                  <DndElement
                    id={id}
                    key={id}
                    type={type}
                    width={width}
                    height={height}
                    left={left}
                    top={top}
                    moveElementByIndex={moveContainer}
                    findElement={findElement}
                    resizeElement={resizeElement}
                  >
                    <div>textbox-{id}</div>
                  </DndElement>
                );
              case ElementType.BUTTON:
                return <div>button</div>;
              case ElementType.IMAGE:
                return <div>image</div>;
              default:
                return <div>error</div>;
            }
          })}
        </DndContainer>
      </DraggableContainer>
    </DndElement>
  );
};

const DraggableContainer = styled.div<{
  newStyle: unknown;
}>`
  width: 100%;
  height: 100%;
  background: lightblue;
  border: 1px solid black;
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered}
`;
