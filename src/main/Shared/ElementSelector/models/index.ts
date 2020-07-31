import { BlockType } from "../../../../data";

export interface ElementSelectorProps {
  addBlock: (blockType: BlockType) => void;
  closeElementDialog: () => void;
}
