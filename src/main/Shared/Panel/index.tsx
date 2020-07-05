import React, { ReactNode, FC } from "react";
import styled from "styled-components";

interface Panel {
  panelRight: boolean;
  children?: ReactNode;
}

const PanelContainer = styled.div<{ panelRight: boolean }>`
  ${(props) =>
    props.panelRight
      ? `border-left: 1px solid ${props.theme.color.borderGrey}; order: 1;`
      : `border-right: 1px solid ${props.theme.color.borderGrey}; order: -1`};

  right: 0;
  top: 0;
  max-height: 100vh;
  width: ${(props) => props.theme.scales.panel};
  ${(props) => props.theme.flex.column}
  background: ${(props) => props.theme.color.darkBackgroundLight};
  overflow-x: hidden;
`;

export const Panel = ({ children, panelRight }: Panel) => {
  return <PanelContainer panelRight={panelRight}>{children}</PanelContainer>;
};
