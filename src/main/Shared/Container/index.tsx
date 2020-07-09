import React from "react";
import styled from "styled-components";
import { DraggableElement } from "../DndElement";
import { ElementType } from "../../Builder/models";
import { ContainerProps } from "./models";

export const Container: React.FC<ContainerProps> = ({
  container,
  moveContainer,
  findContainer,
  resizeContainer,
}) => {
  const { id, type, position, style } = container;
  const { width, height, left, top } = position;
  return (
    <DraggableElement
      acceptDrop={[ElementType.CONTAINER]}
      id={id}
      width={width}
      height={height}
      left={left}
      top={top}
      type={type}
      moveElement={moveContainer}
      findElement={findContainer}
      resizeElement={resizeContainer}
    >
      <DraggableContainer newStyle={style}>
        <div>{id} sup</div>
      </DraggableContainer>
    </DraggableElement>
  );
};

const DraggableContainer = styled.div<{
  newStyle: unknown;
}>`
  width: 100%;
  height: 100%;
  background: lightblue;
  border: 1px solid black;
`;
