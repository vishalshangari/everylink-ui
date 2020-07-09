import React from "react";
import styled from "styled-components";
import { useDrop, DndProvider } from "react-dnd";
import { DndContainerProps } from "./models";
import { HTML5Backend } from "react-dnd-html5-backend";

export const DndContainer: React.FC<DndContainerProps> = ({
  children,
  accept,
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DroppableArea accept={accept}>{children}</DroppableArea>
    </DndProvider>
  );
};

const DroppableArea: React.FC<DndContainerProps> = ({ children, accept }) => {
  const [, drop] = useDrop({ accept });
  return <Container ref={drop}>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
