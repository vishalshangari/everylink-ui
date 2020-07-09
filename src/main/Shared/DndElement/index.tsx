import React, { useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import styled from "styled-components";
import { useResize } from "../../../hooks/useResize";
import { DndElementItem, DndElementProps } from "./models";
import { ElementType } from "../../Builder/models";

export const DndElement: React.FC<DndElementProps> = ({
  id,
  width,
  height,
  left,
  top,
  acceptDrop,
  type,
  originIndex,
  moveElementByIndex,
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
        moveElementByIndex(droppedId, originalIndex);
      }
    },
  });

  const [, drop] = useDrop({
    accept: acceptDrop || "none",
    canDrop: () => false,
    hover: (item: DndElementItem, monitor: DropTargetMonitor) => {
      if (item.id !== id && type === ElementType.CONTAINER) {
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
              moveElementByIndex(item.id, overIndex);
            }
          } else {
            if (trueDelta.y >= height - item.height) {
              const { index: overIndex } = findElement(id);
              moveElementByIndex(item.id, overIndex);
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
      resizeElement(
        thisId,
        type === ElementType.CONTAINER ? width : thisWidth,
        thisHeight
      );
    },
  });

  return (
    <DndElementContainer
      ref={(node) => {
        if (node) {
          elementRef.current = node;
          drag(drop(node));
        }
      }}
      isDragging={isDragging}
      width={width}
      height={height}
      top={top}
      left={left}
      id={id}
      type={type}
    >
      {children}
      <Resizer ref={resize} />
    </DndElementContainer>
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

const DndElementContainer = styled.div<{
  width: number;
  height: number;
  top?: number;
  left?: number;
  isDragging: boolean;
  type: ElementType;
}>`
position: relative;
  ${(props) =>
    props.type !== ElementType.CONTAINER &&
    "transform: translate3d(" +
      props.left +
      "px," +
      props.top +
      "px, 0);position:absolute;"}
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
`;
