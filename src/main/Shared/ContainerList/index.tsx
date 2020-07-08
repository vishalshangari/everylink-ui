import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { DndContainerList } from "./components/DndContainer";

export const ContainerList: React.FC = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DndContainerList>{children}</DndContainerList>
    </DndProvider>
  );
};
