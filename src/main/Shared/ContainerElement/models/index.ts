import { ElementType, Element } from "../../../Builder/models";

export interface ContainerProps {
  element: Element<ElementType.CONTAINER>;
  addElement: (containerId: string, type: ElementType) => void;
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
