import React from "react";
import { controlCenterButtonBaseStyle } from "../Button";
import styled from "styled-components";
import Tooltip from "rc-tooltip";
import { AnchoredActionButtonProps } from "./models/AnchoredActionButtonProps";

const tooltipProps = {
  mouseEnterDelay: 0.75,
  mouseLeaveDelay: 0,
};

export const AnchoredActionButton: React.FC<AnchoredActionButtonProps> = ({
  side,
  description,
  icon,
  displaySize,
  action,
}) => {
  return displaySize == "xl" || displaySize == "lg" ? (
    <Tooltip
      {...tooltipProps}
      placement={side === "left" ? "bottomRight" : "bottomLeft"}
      overlay={description}
    >
      <AnchoredActionButtonStyled side={side} onClick={action}>
        {icon}
      </AnchoredActionButtonStyled>
    </Tooltip>
  ) : null;
};

const AnchoredActionButtonStyled = styled.button<{ side: string }>`
  ${controlCenterButtonBaseStyle}
  position: absolute;
  font-size: ${(props) => props.theme.scales.fontSize.controlCenterButton};
  top: ${(props) => props.theme.padding.base};
  box-shadow: 0px 0px 5px ${(props) =>
    props.theme.colors.controlCenterButtonShadow};
  ${(props) =>
    `${props.side === `right` ? `right:` : `left:`} ${
      props.theme.margin.base
    };`}
  border-radius: 0.5rem;
  &:hover {
    background: ${(props) => props.theme.colors.controlCenterButtonHover};
  }
  }
`;
