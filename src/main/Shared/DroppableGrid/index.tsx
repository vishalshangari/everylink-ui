import React from "react";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { DndContainer } from "./components/DndContainer";
import { DroppableGridProps } from "./models";

export const DroppapleGrid: React.FC<DroppableGridProps> = ({
  isMobile,
  parentWidth,
  parentHeight,
  elements,
  setElements,
}) => {
  return (
    <DndProvider
      backend={isMobile ? TouchBackend : HTML5Backend}
      options={{ enableMouseEvents: true }}
    >
      <DndContainer
        elements={elements}
        setElements={setElements}
        parentWidth={parentWidth}
        parentHeight={parentHeight}
      />
    </DndProvider>
  );
};
