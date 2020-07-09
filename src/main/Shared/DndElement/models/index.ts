import { ElementType } from "../../../Builder/models";

export interface DraggableElementProps {
  id: string;
  width: number;
  height: number;
  left?: number;
  top?: number;
  originIndex?: number;
  acceptDrop: ElementType extends ElementType.CONTAINER
    ? ElementType[]
    : ElementType[] | undefined;
  type: ElementType;
  moveElement: (id: string, to: number) => void;
  findElement: (id: string) => { index: number };
  resizeElement: (id: string, width: number, height: number) => void;
}

export interface DraggableElementItem {
  id: string;
  width: number;
  height: number;
  left?: number;
  top?: number;
  type: ElementType;
  originIndex?: number;
}
