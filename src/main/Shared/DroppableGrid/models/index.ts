import { DragElement } from "../../DraggableElement";

export interface DroppableGridProps {
  isMobile: boolean;
  parentWidth: number;
  parentHeight: number;
  elements: { [key: string]: DragElement };
  setElements: (elements: { [key: string]: DragElement }) => void;
}
