import React, { ReactNode } from "react";
import styled from "styled-components";

interface SidePanel {
  side: "left" | "right";
  children?: ReactNode;
}

const SidePanel = ({ children, side }: SidePanel) => {
  return <SidePanelContainer side={side}>{children}</SidePanelContainer>;
};

const SidePanelContainer = styled.div<{ side: string }>`
  position: absolute;
  ${(props) => (props.side === "left" ? "left: 0" : "right: 0")};
  right: 0;
  top: 0;
  background: ${(props) => props.theme.color.ThreePercentWhite};
  border-left: 1px solid ${(props) => props.theme.color.TenPercentWhite};
  height: 100%;
  width: ${(props) => props.theme.width.sidePanelLg};
  ${(props) => props.theme.flex.column}
`;

export default SidePanel;
