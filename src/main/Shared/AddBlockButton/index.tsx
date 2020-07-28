import React from "react";
import { AddBlockButtonProps } from "./models";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import Tooltip from "rc-tooltip";

const tooltipProps = {
  mouseEnterDelay: 0.75,
  mouseLeaveDelay: 0,
};

const AddBlockButton: React.FC<AddBlockButtonProps> = ({
  handleAddBlock,
  displaySize,
  side,
}) => {
  const styledButton = (
    <AddBlockButtonInner displaySize={displaySize} side={side}>
      <button onClick={handleAddBlock}>
        <MdAdd />
      </button>
    </AddBlockButtonInner>
  );
  return displaySize === "xl" || displaySize === "lg" ? (
    <>
      <Tooltip
        {...tooltipProps}
        placement={side === "left" ? "right" : "left"}
        overlay={"Add new block"}
      >
        {styledButton}
      </Tooltip>
    </>
  ) : (
    <>{styledButton}</>
  );
};

export default AddBlockButton;

const AddBlockButtonInner = styled.div<{ side: string; displaySize: string }>`
  position: absolute;
  z-index: 50;
  ${({ theme }) => theme.scales.display.addBlockButton};
  ${({ side, displaySize }) =>
    side === `left` && (displaySize === `xl` || displaySize === "lg")
      ? `left: 1rem`
      : `right: 1rem`};
  ${(props) => props.theme.flex.centered};
  button {
    transition: 0.2s ease color, 0.2s ease box-shadow, 0.2s ease background;
    cursor: pointer;
    color: white;
    border: none;
    outline: none;
    background: ${(props) => props.theme.colors.addBlockButton};
    ${(props) => props.theme.scales.addBlockButton};
    font-size: 1.5rem;
    ${(props) => props.theme.flex.centered};
    border-radius: 50%;
    ${(props) => props.theme.colors.addBlockButtonShadow}
    &:hover {
      color: ${(props) => props.theme.colors.addBlockButton};
      background: ${(props) => props.theme.colors.addBlockButtonHover};
    }
  }
`;
