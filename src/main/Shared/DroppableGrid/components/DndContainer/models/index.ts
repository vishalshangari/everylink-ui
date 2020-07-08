import { DragElement } from "../../../../DraggableElement";

export interface DndContainerProps {
  parentWidth: number;
  parentHeight: number;
  elements: DragElement[];
  setElements: (element: DragElement) => void;
}
