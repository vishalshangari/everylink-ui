import { ElementType, Element } from "../../../Builder/models";

export interface ContainerListProps {
  containers: Element<ElementType.CONTAINER>[];
  handleMoveContainer: (id: string, to: number) => void;
  handleFindContainer: (id: string) => { index: number };
  handleResizeContainer: (id: string, width: number, height: number) => void;
  addElement: (containerId: string, type: ElementType) => void;
  handleMoveElement: (id: string, left: number, top: number) => void;
  handleFindElement: (id: string) => { index: number };
  handleResizeElement: (id: string, width: number, height: number) => void;
}
