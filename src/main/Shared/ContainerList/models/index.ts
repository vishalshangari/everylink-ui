import { ElementType, Element } from "../../../Builder/models";

export interface ContainerListProps {
  containers: Element<ElementType.CONTAINER>[];
  addElement: (containerId: string, type: ElementType) => void;
  handleMoveElement: (
    id: string,
    { index, left, top }: { index?: number; left?: number; top?: number }
  ) => void;
  handleFindElement: (
    id: string
  ) => {
    index: number;
    parentPath: string;
    parentContainer: Element<ElementType.CONTAINER>;
    elementPath: string;
    element: Element<ElementType>;
  };
  handleResizeElement: (id: string, width: number, height: number) => void;
  selectedElement: Element<ElementType> | undefined;
  updateSelectedElement: (id: string) => void;
}
