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
        <div style={{ position: "absolute", bottom: 0, left: 0, zIndex: 1 }}>
          <button onClick={() => addElement(id, ElementType.TEXTBOX)}>
            txt
          </button>

          <button onClick={() => addElement(id, ElementType.BUTTON)}>
            btn
          </button>

          <button onClick={() => addElement(id, ElementType.IMAGE)}>img</button>
        </div>
        <DndContainer
          accept={[ElementType.TEXTBOX, ElementType.BUTTON, ElementType.IMAGE]}
          moveElement={moveElement}
        >
          {container.elements.map((element) => {
            const { id, type, position, style } = element;
            const { height, width, left, top } = position;
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
                {type === ElementType.TEXTBOX ? (
                  <div>textbox{id}</div>
                ) : type === ElementType.IMAGE ? (
                  <img
                    style={{
                      backgroundColor: "red",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : type === ElementType.BUTTON ? (
                  <div>button{id}</div>
                ) : (
                  <div>error</div>
                )}
              </DndElement>
            );
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
