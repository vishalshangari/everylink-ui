import React, { ReactNode, FC } from "react";
import styled from "styled-components";

interface PanelProps {
  panelRight: boolean;
  children?: ReactNode;
  isDesktop: boolean;
}

interface PanelInnerContainerProps {
  children?: ReactNode;
  isDesktop: boolean;
}

const StyledPanelInnerContainer = styled.div<{ isDesktop: boolean }>`
  ${(props) => props.theme.flex.column}
  height: 100%;
  background: ${(props) => props.theme.color.darkBackgroundLight};

  ${(props) =>
    props.isDesktop
      ? `border-radius: 1rem; border: 1px solid #31363c;`
      : `border-radius: 0; border: none`};
  box-shadow: 0px 0px 5px #000;
  overflow: hidden;
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

const PanelContainer = styled.div<{ panelRight: boolean; isDesktop: boolean }>`
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
    `order: -1; padding-left: ${props.theme.padding.base};`}

  max-height: 100vh;
  width: ${(props) => props.theme.scales.panel};
`;

export const Panel = ({ children, panelRight, isDesktop }: PanelProps) => {
  return (
    <PanelContainer isDesktop={isDesktop} panelRight={panelRight}>
      {children}
    </PanelContainer>
  );
};
