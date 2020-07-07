import React, { useRef, useState, useCallback, useEffect } from "react";
import { useDrag, DragSourceMonitor, useDrop } from "react-dnd";
import styled from "styled-components";
import { useResize } from "../../../hooks/useResize";

export interface DraggableElementProps {
  id: string;
  title: string;
  type: string;
  left: number;
  top: number;
  width: number;
  height: number;
  moveElement: (id: string, left: number, top: number) => void;
  resizeElement: (id: string, width: number, height: number) => void;
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
  const {
    id,
    title,
    left,
    top,
    width,
    height,
    moveElement,
    resizeElement,
    type,
  } = props;
  const [{ isDragging }, drag] = useDrag({
    item: { type, id, left, top, width, height, title },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [resize] = useResize({
    item: { id, width, height, top, left },
    handleSizeChange: resizeElement,
  });

  return (
    <DraggableElementContainer
      ref={drag}
      left={left}
      top={top}
      isDragging={isDragging}
      width={width}
      height={height}
      id={id}
    >
      <div>{title}</div>
      <div
        ref={resize}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "10px",
          height: "10px",
          backgroundColor: "blue",
        }}
      />
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
  border: 1px solid black;
  overflow: hidden;
`;
