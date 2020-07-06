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
  const moveElement = useCallback(
    (id: string, left: number, top: number) => {
      setElements({
        ...elements,
        [id]: { ...elements[id], left, top },
      });
    },
    [elements, setElements]
  );

  const [, drop] = useDrop({
    accept: "element",
    drop(item: DragElement, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as {
        x: number;
        y: number;
      };

      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveElement(item.id, left, top);
      return undefined;
    },
    canDrop: (item: DragElement, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset() as {
        x: number;
        y: number;
      };

      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      if (
        left + item.width > parentWidth ||
        left < 0 ||
        top < 0 ||
        top + item.height > parentHeight
      ) {
        return false;
      }
      return true;
    },
  });

  return (
    <Container ref={drop}>
      {Object.keys(elements).map((key) => (
        <DraggableElement key={key} {...elements[key]} id={key} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
