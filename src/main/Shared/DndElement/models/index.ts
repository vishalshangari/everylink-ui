import { ElementType } from "../../../Builder/models";

export interface DndElementProps {
  id: string;
  width: number;
  height: number;
  left?: number;
  top?: number;
  originIndex?: number;
  acceptDrop?: ElementType[];
  type: ElementType;
  moveElementByIndex: (id: string, to: number) => void;
  findElement: (id: string) => { index: number };
  resizeElement: (id: string, width: number, height: number) => void;
}

export interface DndElementItem {
  id: string;
  width: number;
  height: number;
  left?: number;
  top?: number;
  type: ElementType;
  originIndex?: number;
}
