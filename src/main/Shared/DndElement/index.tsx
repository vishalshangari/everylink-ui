import React, { useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import styled from "styled-components";
import { useResize } from "../../../hooks/useResize";
import _ from "lodash";
import { DraggableElementProps, DraggableElementItem } from "./models";

export const DraggableElement: React.FC<DraggableElementProps> = ({
  id,
  width,
  height,
  left,
  top,
  acceptDrop,
  type,
  originIndex,
  moveElement,
  findElement,
  resizeElement,
  children,
}) => {
  const elementRef = useRef<HTMLDivElement>();
  const [{ isDragging }, drag] = useDrag({
    item: { type, id, originIndex, height, width, left, top },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveElement(droppedId, originalIndex);
      }
    },
  });

  const [, drop] = useDrop({
    accept: acceptDrop || "none",
    canDrop: () => false,
    hover: (item: DraggableElementItem, monitor: DropTargetMonitor) => {
      if (item.id !== id) {
        const offset = monitor.getSourceClientOffset();
        const delta = monitor.getDifferenceFromInitialOffset();
        const bounds = elementRef.current?.getBoundingClientRect();

        if (offset && bounds && delta) {
          const trueDelta = {
            x: offset.x - bounds.left,
            y: offset.y - bounds.top,
          };
          if (delta.y < 0) {
            if (trueDelta.y <= 0) {
              const { index: overIndex } = findElement(id);
              moveElement(item.id, overIndex);
            }
          } else {
            if (trueDelta.y >= height - item.height) {
              const { index: overIndex } = findElement(id);
              moveElement(item.id, overIndex);
            }
          }
        }
      }
    },
  });

  const [resize] = useResize({
    item: { id, width, height },
    handleSizeChange: (
      thisId: string,
      thisWidth: number,
      thisHeight: number
    ) => {
      resizeElement(thisId, width, thisHeight);
    },
  });

  return (
    <DraggableElementContainer
      ref={(node) => {
        if (node) {
          elementRef.current = node;
          drag(drop(node));
        }
      }}
      isDragging={isDragging}
      width={width}
      height={height}
      id={id}
    >
      {children}
      <Resizer ref={resize} />
    </DraggableElementContainer>
  );
};

const Resizer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: blue;
`;

const DraggableElementContainer = styled.div<{
  width: number;
  height: number;
  top?: number;
  left?: number;
  isDragging: boolean;
}>`
  ${(props) =>
    _.isNumber(props.left) &&
    _.isNumber(props.top) &&
    "transform: translate3d(" + props.left + "px," + props.top + "px);"}
  position: relative;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
`;
