import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { DraggableElement, DragElement } from "../../../DraggableElement";
import { DndContainerProps } from "./models";
import _ from "lodash";

export const DndContainer: React.FC<DndContainerProps> = ({
  parentHeight,
  parentWidth,
  elements,
  setElements,
}) => {
  const moveElement = (id: string, left: number, top: number) => {
    const currentElement = _.find(elements, { id });
    if (currentElement) {
      setElements({ ...currentElement, left, top });
    }
  };

  const resizeElement = (id: string, width: number, height: number) => {
    const currentElement = _.find(elements, { id });
    if (currentElement) {
      setElements({ ...currentElement, width, height });
    }
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
      top = Math.floor(top / (parentHeight / 25)) * (parentHeight / 25);
      left = Math.floor(left / (parentWidth / 25)) * (parentWidth / 25);
      moveElement(item.id, left, top);
      return undefined;
    },
  });

  return (
    <Container ref={drop}>
      {elements.map((element) => (
        <DraggableElement
          moveElement={moveElement}
          resizeElement={resizeElement}
          key={element.id}
          {...element}
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
