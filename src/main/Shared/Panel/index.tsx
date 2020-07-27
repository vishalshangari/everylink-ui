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
  box-shadow: 0 0 0.25em ${({ theme }) => theme.colors.dashboardShadow};
  overflow: hidden;
  width: calc(${(props) => props.theme.scales.panel} - 2em);
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
  transition: .5s ease width, .5s ease padding;
  z-index: 5;
  ${(props) =>
    props.isDesktop
      ? `padding: 1em;`
      : `border-${props.panelRight ? `left` : `right`}: 1px solid ${
          props.theme.color.borderGrey
        };`}

  ${(props) => props.panelRight && props.isDesktop && `order: 1;`}

  ${(props) =>
    !props.panelRight &&
    props.isDesktop &&
    `order: -1; ${StyledPanelInnerContainer} {float: right;}`}

  
  ${(props) =>
    props.dashboardHidden
      ? `width: 0; padding-left: 0; padding-right: 0;`
      : `width: calc(${props.theme.scales.panel});`}
  max-height: 100vh;
  overflow: hidden;
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
