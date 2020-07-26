import React, { ReactNode, FC } from "react";
import styled from "styled-components";

interface PanelProps {
  panelRight: boolean;
  children?: ReactNode;
  isDesktop: boolean;
  dashboardHidden: boolean;
}

interface PanelInnerContainerProps {
  children?: ReactNode;
  isDesktop: boolean;
}

const StyledPanelInnerContainer = styled.div<{ isDesktop: boolean }>`
  ${(props) => props.theme.flex.column}
  height: 100%;
  background: ${(props) => props.theme.colors.dashboardBg};

  ${(props) =>
    props.isDesktop
      ? `border-radius: 0.5rem; border: 1px solid ${props.theme.colors.dashboardBorders};`
      : `border-radius: 0; border: none`};
  box-shadow: 0px 0px 5px #000;
  overflow: hidden;
  width: calc(${(props) => props.theme.scales.panel} - 1rem);
`;

export const PanelInnerContainer = ({
  children,
  isDesktop,
}: PanelInnerContainerProps) => {
  return (
    <StyledPanelInnerContainer isDesktop={isDesktop}>
      {children}
    </StyledPanelInnerContainer>
  );
};

const PanelContainer = styled.div<{
  panelRight: boolean;
  isDesktop: boolean;
  dashboardHidden: boolean;
}>`
  transition: .5s ease width;
  z-index: 5;
  ${(props) =>
    props.isDesktop
      ? `padding-top: ${props.theme.padding.base}; padding-bottom: ${props.theme.padding.base};`
      : `border-${props.panelRight ? `left` : `right`}: 1px solid ${
          props.theme.color.borderGrey
        };`}

  ${(props) =>
    props.panelRight &&
    props.isDesktop &&
    `order: 1; padding-right: ${props.theme.padding.base};`}

  ${(props) =>
    !props.panelRight &&
    props.isDesktop &&
    `order: -1; padding-left: ${props.theme.padding.base}; ${StyledPanelInnerContainer} {float: right;}`}

  
  ${(props) =>
    props.dashboardHidden
      ? `width: 0; padding-left: 0; padding-right: 0;`
      : `width: ${props.theme.scales.panel};`}
  overflow: hidden;
  max-height: 100vh;
`;

export const Panel = ({
  children,
  panelRight,
  isDesktop,
  dashboardHidden,
}: PanelProps) => {
  return (
    <PanelContainer
      dashboardHidden={dashboardHidden}
      isDesktop={isDesktop}
      panelRight={panelRight}
    >
      {children}
    </PanelContainer>
  );
};
