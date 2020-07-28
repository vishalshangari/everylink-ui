import React from "react";
import { DashboardHeaderProps } from "./models";
import styled from "styled-components";
import { SidePaddedDashboardContainer } from "../";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  children,
  title,
  styleApplied,
  styleSelectorExpanded,
  handleStyleSelectorExpanded,
}) => {
  return (
    <DashboardHeaderInner>
      <h2>{title}</h2>
      <StyleSelectorDisplay onClick={handleStyleSelectorExpanded}>
        <span>{styleApplied}</span>

        {styleSelectorExpanded ? <BsChevronUp /> : <BsChevronDown />}
      </StyleSelectorDisplay>
      {children}
    </DashboardHeaderInner>
  );
};

export default DashboardHeader;

const DashboardHeaderInner = styled(SidePaddedDashboardContainer)`
  z-index: 3;
  padding-top: 2rem;

  ${(props) => props.theme.flex.row}
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: ${(props) => props.theme.scales.fontSize.dashboardTitle};
  }
`;

const StyleSelectorDisplay = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textPrimary};
  ${(props) => props.theme.flex.row}
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.styleSelectorBg};
  border: 1px solid ${(props) => props.theme.colors.dashboardBorders};
  span {
    margin-right: 0.75rem;
  }
`;
