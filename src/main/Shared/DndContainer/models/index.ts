import { ElementType } from "../../../Builder/models";

export interface DndContainerProps {
  accept: ElementType[];
  moveElement: (
    id: string,
    { index, left, top }: { index?: number; left?: number; top?: number }
  ) => void;
}
