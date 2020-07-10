import React, { useRef, useState } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import styled from "styled-components";
import { useResize } from "../../../hooks/useResize";
import { DndElementItem, DndElementProps } from "./models";
import { ElementType } from "../../Builder/models";
import _ from "lodash";

export const DndElement: React.FC<DndElementProps> = ({
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
        moveElement(droppedId, { index: originalIndex });
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

          const { index: overIndex, parentPath: hoverParentPath } = findElement(
            id
          );
          const { parentPath: dragParentPath } = findElement(item.id);
          if (hoverParentPath === dragParentPath) {
            if (delta.y < 0) {
              if (trueDelta.y <= 0) {
                moveElement(item.id, { index: overIndex });
              }
            } else {
              if (trueDelta.y >= height - item.height) {
                moveElement(item.id, { index: overIndex });
              }
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

const DndElementContainer = styled.div.attrs(
  ({
    width,
    height,
    top,
    left,
    isDragging,
    type,
  }: {
    width: number;
    height: number;
    top?: number;
    left?: number;
    isDragging: boolean;
    type: ElementType;
  }) => ({
    style: {
      transform:
        type === ElementType.CONTAINER
          ? "translate3d(" + left + "px," + top + "px, 0)"
          : "none",
      position: type === ElementType.CONTAINER ? "relative" : "absolute",
      background: isDragging ? "yellow" : "transparent",
      width: width + "px",
      height: height,

      overflow: "hidden",
      top,
      left,
    },
  })
)<{
  width: number;
  height: number;
  top?: number;
  left?: number;
  isDragging: boolean;
  type: ElementType;
}>``;
