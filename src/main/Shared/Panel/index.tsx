import React, { ReactNode, FC } from "react";
import styled from "styled-components";

interface Panel {
  panelRight: boolean;
  children?: ReactNode;
}

export const PanelInnerContainer = styled.div`
  ${(props) => props.theme.flex.column}
  height: 100%;
  background: ${(props) => props.theme.color.darkBackgroundLight};
  border: 1px solid #31363c;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px #000;
  overflow: hidden;
`;

const PanelContainer = styled.div<{ panelRight: boolean }>`
  padding-top: 1rem;
  padding-bottom: 1rem;
  ${(props) =>
    props.panelRight
      ? `order: 1; padding-right: ${props.theme.padding.base};`
      : `order: -1; padding-left: ${props.theme.padding.base};`}
  max-height: 100vh;
  width: ${(props) => props.theme.scales.panel};
`;

export const Panel = ({ children, panelRight }: Panel) => {
  return <PanelContainer panelRight={panelRight}>{children}</PanelContainer>;
};
