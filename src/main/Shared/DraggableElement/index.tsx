import React from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import styled from "styled-components";

export interface DraggableElementProps {
  id: string;
  title: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface DragElement {
  id: string;
  type: string;
  left: number;
  top: number;
  width: number;
  height: number;
  title: string;
}

export const DraggableElement: React.FC<DraggableElementProps> = (props) => {
  const { id, title, left, top, width, height } = props;
  const [{ isDragging }, drag] = useDrag({
    item: { type: "element", id, left, top, width, height, title },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <DraggableElementContainer
      ref={drag}
      left={left}
      top={top}
      isDragging={isDragging}
      width={width}
      height={height}
    >
      <div>{title}</div>
    </DraggableElementContainer>
  );
};

const DraggableElementContainer = styled.div<{
  left: number;
  top: number;
  width: number;
  height: number;
  isDragging: boolean;
}>`
  position: absolute;
  transform: translate3d(
    ${(props) => props.left}px,
    ${(props) => props.top}px,
    0
  );
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: lightblue;
`;
