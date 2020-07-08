import React, { useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { ElementType } from "../../Builder/models";
import styled from "styled-components";
import { useResize } from "../../../hooks/useResize";

export interface ContainerProps {
  id: string;
  width: number;
  height: number;
  moveContainer: (id: string, to: number) => void;
  findContainer: (id: string) => { index: number };
  resizeContainer: (id: string, width: number, height: number) => void;
}

export interface ContainerDragItem {
  id: string;
  width: number;
  height: number;
  type: ElementType;
  originIndex: number;
}

export const Container: React.FC<ContainerProps> = ({
  id,
  width,
  height,
  moveContainer,
  findContainer,
  resizeContainer,
}) => {
  const containerRef = useRef<HTMLDivElement>();
  const originalIndex = findContainer(id).index;
  const [{ isDragging }, drag] = useDrag({
    item: { type: ElementType.CONTAINER, id, originalIndex, height, width },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveContainer(droppedId, originalIndex);
      }
    },
  });

  const [, drop] = useDrop({
    accept: ElementType.CONTAINER,
    canDrop: () => false,
    hover: (item: ContainerDragItem, monitor: DropTargetMonitor) => {
      if (item.id !== id) {
        const offset = monitor.getSourceClientOffset();
        const delta = monitor.getDifferenceFromInitialOffset();
        const bounds = containerRef.current?.getBoundingClientRect();

        if (offset && bounds && delta) {
          const trueDelta = {
            x: offset.x - bounds.left,
            y: offset.y - bounds.top,
          };
          if (delta.y < 0) {
            if (trueDelta.y <= 0) {
              const { index: overIndex } = findContainer(id);
              moveContainer(item.id, overIndex);
            }
          } else {
            if (trueDelta.y >= height - item.height) {
              const { index: overIndex } = findContainer(id);
              moveContainer(item.id, overIndex);
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
      resizeContainer(thisId, width, thisHeight);
    },
  });

  return (
    <DraggableContainer
      ref={(node) => {
        if (node) {
          containerRef.current = node;
          drag(drop(node));
        }
      }}
      isDragging={isDragging}
      width={width}
      height={height}
      id={id}
    >
      <div>{id}</div>
      <Resizer ref={resize} />
    </DraggableContainer>
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

const DraggableContainer = styled.div<{
  width: number;
  height: number;
  isDragging: boolean;
}>`
  position: relative;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: lightblue;
  border: 1px solid black;
  overflow: hidden;
`;
