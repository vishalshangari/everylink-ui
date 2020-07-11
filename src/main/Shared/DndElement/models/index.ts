import { ElementType, Element } from "../../../Builder/models";

export interface DndElementProps {
  id: string;
  width: number;
  height: number;
  left?: number;
  top?: number;
  originIndex?: number;
  acceptDrop?: ElementType[];
  type: ElementType;
  moveElement: (
    id: string,
    { index, left, top }: { index?: number; left?: number; top?: number }
  ) => void;
  findElement: (
    id: string
  ) => {
    index: number;
    parentPath: string;
    parentContainer: Element<ElementType.CONTAINER>;
    elementPath: string;
    element: Element<ElementType>;
  };
  resizeElement: (id: string, width: number, height: number) => void;
  selectedElement: Element<ElementType> | undefined;
  updateSelectedElement: (id: string) => void;
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
