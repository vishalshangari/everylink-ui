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
  panelRight,
  dashboardHidden,
  tooltip,
  action,
}) => {
  const styledButton = (
    <AnchoredActionButtonStyled
      side={side}
      onClick={action}
      panelRight={panelRight}
      dashboardHidden={dashboardHidden}
    >
      {icon}
    </AnchoredActionButtonStyled>
  );
  return displaySize == "xl" || displaySize == "lg" ? (
    <>
      {tooltip ? (
        <Tooltip
          {...tooltipProps}
          placement={side === "left" ? "bottomRight" : "bottomLeft"}
          overlay={description}
        >
          {styledButton}
        </Tooltip>
      ) : (
        <>{styledButton}</>
      )}
    </>
  ) : null;
};

const AnchoredActionButtonStyled = styled.button<{
  side: string;
  panelRight: boolean;
  dashboardHidden?: boolean;
}>`
  ${controlCenterButtonBaseStyle};
  position: absolute;
  font-size: ${(props) => props.theme.scales.fontSize.controlCenterButton};
  top: ${(props) => props.theme.padding.base};
  box-shadow: 0px 0px 5px ${(props) =>
    props.theme.colors.controlCenterButtonShadow};

  ${({ side, panelRight, dashboardHidden }) => {
    if (side === `right`) {
      return `right: ${panelRight && !dashboardHidden ? `0` : `1rem`};`;
    }
    if (side === `left`) {
      return `left: ${!panelRight && !dashboardHidden ? `0` : `1rem`};`;
    }
  }}
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.controlCenterButtonBorder};
  transition: 0.2s ease all;
  &:hover {
    background: ${(props) => props.theme.colors.controlCenterButtonHover};
  }
  }
`;
