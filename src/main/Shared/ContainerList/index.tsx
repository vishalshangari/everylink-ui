import React from "react";
import { DndContainer } from "../DndContainer";
import { ElementType } from "../../Builder/models";

export const ContainerList: React.FC = ({ children }) => {
  return (
    <DndContainer accept={[ElementType.CONTAINER]}>{children}</DndContainer>
  );
};
