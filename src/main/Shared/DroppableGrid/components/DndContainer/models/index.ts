import { DragElement } from "../../../../DraggableElement";

export interface DndContainerProps {
  parentWidth: number;
  parentHeight: number;
  elements: { [key: string]: DragElement };
  setElements: (element: DragElement) => void;
}
