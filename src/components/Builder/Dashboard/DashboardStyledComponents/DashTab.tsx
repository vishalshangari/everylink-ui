import styled from "styled-components";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { SidePaddedDashboardContainer } from "./DashFormats";

/* Main Dashboard Tabs */

export const DashPanelsContainer = styled.div`
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  overflow-x: hidden;
  position: relative;

  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.color.darkBackgroundLight};
    border-left: 1px solid ${(props) => props.theme.color.borderGreyDark};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.borderGreyDark};
    -webkit-transition: 0.3s ease all;
    &:hover {
      background: ${(props) => props.theme.color.borderGrey};
    }
  }
`;

export const StyledTabPanel = styled(TabPanel)``;

export const PanelTopShadow = styled.div`
  width: 100%;
  height: 2rem;
  position: sticky;
  top: -1px;
  background: linear-gradient(
    180deg,
    rgba(28, 31, 34, 1) 10%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const StyledTabs = styled(Tabs)`
  -webkit-tap-highlight-color: transparent;
  flex-grow: 1;
  min-height: 0;
  ${(props) => props.theme.flex.column}
`;

export const DashTab = styled(Tab)<{ isActive: boolean }>`
  justify-content: center;
  list-style: none;
  position: relative;
  padding: ${(props) => props.theme.padding.base};
  ${(props) => props.theme.flex.row}
  cursor: pointer;
  flex: 1;
  color: ${(props) => props.theme.color.offwhiteBright};
  > * {
    opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  }

  &:hover {
    > * {
      opacity: 1;
    }
  }
  &:focus {
    outline: none;
  }

  /* Border magic */

  border-bottom: ${(props) =>
    `1px solid ` +
    (!props.isActive ? `${props.theme.color.borderGrey}` : `transparent`)};

  &:first-child {
    border-right: ${(props) =>
      `1px solid ` +
      (props.isActive ? `${props.theme.color.borderGrey}` : `transparent`)};
  }

  &:nth-child(2) {
    border-right: ${(props) =>
      `1px solid ` +
      (props.isActive ? `${props.theme.color.borderGrey}` : `transparent`)};
    border-left: ${(props) =>
      `1px solid ` +
      (props.isActive ? `${props.theme.color.borderGrey}` : `transparent`)};
  }

  &:last-child {
    border-left: ${(props) =>
      `1px solid ` +
      (props.isActive ? `${props.theme.color.borderGrey}` : `black`)};
  }

  background: ${(props) =>
    props.isActive ? `inherit` : props.theme.color.darkBackground};
`;

export const TabIcon = styled.div`
  padding-right: ${(props) => props.theme.padding.halfBase};
  display: inline-block;
  line-height: 1.375rem;
`;

export const TabTitle = styled.div`
  display: inline-block;
`;

export const DashTabList = styled(TabList)`
  padding: 0;
  margin: 0;
  ${(props) => props.theme.flex.row}
`;

/* Dashboard sub tabs */

export const DashSubTabs = styled(Tabs)``;

export const DashSubTabsWrap = styled(SidePaddedDashboardContainer)``;

export const DashSubTabList = styled(TabList)`
  padding: 0;
  margin: 0;
  ${(props) => props.theme.flex.row}
`;

export const DashSubTab = styled(Tab)<{ isActive: boolean }>`
  justify-content: center;
  list-style: none;
  position: relative;
  padding: ${(props) => props.theme.padding.base};
  ${(props) => props.theme.flex.row}
  cursor: pointer;
  flex: 1;
  color: ${(props) => props.theme.color.offwhiteBright};
  font-weight: bold;
  opacity: ${(props) => (props.isActive ? 1 : 0.75)};

  &:hover {
    > * {
      opacity: 1;
    }
  }
  &:focus {
    outline: none;
  }

  /* Border magic */

  border-bottom: ${(props) =>
    `3px solid ` +
    (props.isActive
      ? `${props.theme.color.dashboardAccent}`
      : `${props.theme.color.borderGreyDark}`)};
`;
