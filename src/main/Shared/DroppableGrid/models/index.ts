import { DragElement } from "../../DraggableElement";

export interface DroppableGridProps {
  isMobile: boolean;
  parentWidth: number;
  parentHeight: number;
  elements: DragElement[];
  setElements: (element: DragElement) => void;
}
