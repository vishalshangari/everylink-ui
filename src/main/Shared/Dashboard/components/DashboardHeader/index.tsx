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
      <StyleSelectorDisplay
        onClick={handleStyleSelectorExpanded}
        expanded={styleSelectorExpanded}
      >
        <span>{styleApplied}</span>

        {/* styleSelectorExpanded ? <BsChevronUp /> : <BsChevronDown /> */}
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

const StyleSelectorDisplay = styled.button<{ expanded: boolean }>`
  border: none;
  outline: none;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textPrimary};
  ${(props) => props.theme.flex.row}
  align-items: center;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.dashboardActiveTab};
  border-radius: 0.25rem;
  &:after {
    content: '';
    position: absolute;
    display: block;
    height: 1rem;
    width: 1rem;
    right: 1rem;
    top: 0.75rem;
    -webkit-transition: -webkit-transform ease 0.2s;
    background-image: ${(props) =>
      `url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='%23${props.theme.colors.textSecondaryRGB.slice(
        1
      )}' stroke-width='0' viewBox='0 0 16 16' height='r1em' width='1rem' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`};
    ${({ expanded }) =>
      expanded ? `-webkit-transform: rotate(180deg)` : ``};      
  }
  /* background: ${(props) => props.theme.colors.styleSelectorBg}; */
  background-repeat: no-repeat, repeat;
  background-position: right 1em top 50%, 0 0;
  background-size: 1rem auto, 100%;
  border: 1px solid ${(props) => props.theme.colors.dashboardBorders};

`;
