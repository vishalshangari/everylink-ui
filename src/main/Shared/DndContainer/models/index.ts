import { ElementType } from "../../../Builder/models";

export interface DndContainerProps {
  accept: ElementType[];
  moveElement: (id: string, left: number, top: number) => void;
}
