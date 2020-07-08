import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { ElementType } from "../../../../Builder/models";

export const DndContainerList: React.FC = ({ children }) => {
  const [, drop] = useDrop({ accept: ElementType.CONTAINER });
  return <Container ref={drop}>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
