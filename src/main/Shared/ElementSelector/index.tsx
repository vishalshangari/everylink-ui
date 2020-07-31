import React from "react";
import { ElementSelectorProps } from "./models";
import styled from "styled-components";
import { BsBoundingBoxCircles, BsImage } from "react-icons/bs";
import { MdTextFields } from "react-icons/md";
import { BlockType } from "../../../data";

const ElementSelector: React.FC<ElementSelectorProps> = ({
  addBlock,
  closeElementDialog,
}) => {
  const handleNewContainer = (blockType: BlockType) => {
    addBlock(blockType);
    closeElementDialog();
  };
  return (
    <ElementSelectorWrap>
      <ElementButton onClick={() => handleNewContainer(BlockType.Container)}>
        <ElementLogo>
          <BsBoundingBoxCircles />
        </ElementLogo>
        <ElementLabel>Container</ElementLabel>
      </ElementButton>
      <ElementButton onClick={() => handleNewContainer(BlockType.Text)}>
        <ElementLogo>
          <MdTextFields />
        </ElementLogo>
        <ElementLabel>Text</ElementLabel>
      </ElementButton>
      <ElementButton onClick={() => handleNewContainer(BlockType.Container)}>
        <ElementLogo>
          <BsImage />
        </ElementLogo>
        <ElementLabel>Image</ElementLabel>
      </ElementButton>
    </ElementSelectorWrap>
  );
};

const ElementSelectorWrap = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
`;

const ElementButton = styled.button`
  padding: 1rem;
  border-radius: 0.25rem;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: none;
  border: 2px dashed ${(props) => props.theme.colors.elementButtonBorder};
  cursor: pointer;
  & > * {
    opacity: 0.75;
  }
  &:hover {
    background: ${(props) => props.theme.colors.elementButtonBg};
    border: 2px solid ${(props) => props.theme.colors.elementButtonBorder};
    & > * {
      opacity: 1;
    }
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.formAccent};
  }
`;

const ElementLogo = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const ElementLabel = styled.div`
  font-weight: bold;
`;

export default ElementSelector;
