import { ElementType, Element } from "../../../Builder/models";

export interface ContainerProps {
  container: Element<ElementType.CONTAINER>;
  moveContainer: (id: string, to: number) => void;
  findContainer: (id: string) => { index: number };
  resizeContainer: (id: string, width: number, height: number) => void;
}
