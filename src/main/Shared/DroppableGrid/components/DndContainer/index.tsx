import React, { useCallback } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { DraggableElement, DragElement } from "../../../DraggableElement";
import { DndContainerProps } from "./models";

export const DndContainer: React.FC<DndContainerProps> = ({
  parentHeight,
  parentWidth,
  elements,
  setElements,
}) => {
  const moveElement = (id: string, left: number, top: number) => {
    setElements({ ...elements[id], left, top });
  };

  const resizeElement = (id: string, width: number, height: number) => {
    setElements({ ...elements[id], width, height });
  };

  const [, drop] = useDrop({
    accept: "container",
    drop(item: DragElement, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as {
        x: number;
        y: number;
      };

      if (!delta) return undefined;
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      if (left + item.width > parentWidth) {
        left = parentWidth - item.width;
      } else if (left < 0) {
        left = 0;
      }
      if (top + item.height > parentHeight) {
        top = parentHeight - item.height;
      } else if (top < 0) {
        top = 0;
      }
      top = Math.floor(top / (parentHeight / 10)) * (parentHeight / 10);
      left = Math.floor(left / (parentWidth / 10)) * (parentWidth / 10);
      moveElement(item.id, left, top);
      return undefined;
    },
  });

  return (
    <Container ref={drop}>
      {Object.keys(elements).map((key) => (
        <DraggableElement
          moveElement={moveElement}
          resizeElement={resizeElement}
          key={key}
          {...elements[key]}
          id={key}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
