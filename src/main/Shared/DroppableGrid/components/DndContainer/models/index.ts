import { DragElement } from "../../../../DraggableElement";

export interface DndContainerProps {
  parentWidth: number;
  parentHeight: number;
  elements: { [key: string]: DragElement };
  setElements: (elements: { [key: string]: DragElement }) => void;
}
