import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

/* General Dashboard Components */

export const PaddedDashboardContainer = styled.div`
  padding: ${(props) => props.theme.padding.base}
    ${(props) => props.theme.padding.doubleBase};
`;

export const SidePaddedDashboardContainer = styled.div`
  padding: 0 ${(props) => props.theme.padding.doubleBase};
`;

export const DashboardViewWrap = styled.div``;

export const DashboardTitleDisplay = styled.div`
  padding: ${(props) => props.theme.padding.doubleBase} 0
    ${(props) => props.theme.padding.base};
  border-bottom: 1px solid ${(props) => props.theme.color.borderGrey};
`;

export const DashboardTitle = styled(SidePaddedDashboardContainer)`
  color: ${(props) => props.theme.color.offwhiteBright};
  padding-bottom: ${(props) => props.theme.padding.halfBase};
  h3 {
    font-size: ${(props) => props.theme.fontSizes.dashboardHeader};
  }
`;

export const DashboardHeader = styled(PaddedDashboardContainer)`
  color: ${(props) => props.theme.color.offwhiteBright};
  padding-bottom: ${(props) => props.theme.padding.halfBase};
  h3 {
    font-size: ${(props) => props.theme.fontSizes.dashboardHeader};
  }
`;

export const DashboardTextbox = styled(PaddedDashboardContainer)`
  color: ${(props) => props.theme.color.offwhite};
  font-size: ${(props) => props.theme.fontSizes.dashboardText};
`;

export const DashboardTextboxSmall = styled(SidePaddedDashboardContainer)`
  padding: 0 ${(props) => props.theme.padding.doubleBase};
  color: ${(props) => props.theme.color.middleGrey};
  font-size: ${(props) => props.theme.fontSizes.dashboardTextSmall};
`;

export const DashboardTextEditor = styled.div`
  min-height: 150px;
  background: ${(props) => props.theme.color.offwhite};
  padding: ${(props) => props.theme.padding.base};
  border-radius: ${(props) => props.theme.borderRadius.small};
`;

export const DashboardElementActions = styled(PaddedDashboardContainer)`
  padding: ${(props) => props.theme.padding.base}
    ${(props) => props.theme.padding.doubleBase};
  ${(props) => props.theme.flex.row};
  border-top: 1px solid ${(props) => props.theme.color.borderGrey};
  > * {
    margin-right: ${(props) => props.theme.margin.base};
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const DashboardButtonBase = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  cursor: pointer;
  padding: ${(props) => props.theme.padding.base};
  border-radius: ${(props) => props.theme.borderRadius.small};
  color: ${(props) => props.theme.color.offwhite};
  background: ${(props) => props.theme.color.borderGrey};
  span {
    line-height: 1.375rem;
    padding-right: ${(props) => props.theme.padding.halfBase};
  }
`;

/* Content Pane -------- Action Buttons */

export const DashboardDoneBtn = styled(DashboardButtonBase)`
  background: ${(props) => props.theme.color.doneBtn};
  &:hover {
    background: ${(props) => props.theme.color.doneBtnHover};
  }
`;

export const DashboardDuplicateBtn = styled(DashboardButtonBase)`
  background: ${(props) => props.theme.color.borderGreyDark};
  &:hover {
    background: ${(props) => props.theme.color.borderGrey};
  }
`;

export const DashboardDeleteBtn = styled(DashboardButtonBase)`
  background: ${(props) => props.theme.color.deleteBtn};
  &:hover {
    background: ${(props) => props.theme.color.deleteBtnHover};
  }
`;

/* Appearance Pane -------- Configuration Options */

export const SettingsGrid = styled.div`
  flex-grow: 1;
`;

export const BorderedGrid = styled(Grid)`
  border-top: 1px solid ${(props) => props.theme.color.borderGreyDark};
`;

export const SettingsHeader = styled(PaddedDashboardContainer)`
  h4 {
    ${(props) => props.theme.fonts.dashSettingsHeader}
    color: ${(props) => props.theme.color.offwhite}
  }
  padding-bottom: ${(props) => props.theme.padding.base};
  margin-top: ${(props) => props.theme.margin.base};
`;

export const SingleSelectSetting = styled(PaddedDashboardContainer)`
  h4 {
    ${(props) => props.theme.fonts.dashSettingsHeader}
    color: ${(props) => props.theme.color.offwhite};
    margin-bottom: ${(props) => props.theme.margin.base};
  };
  select {
    width: 100%;
    padding: ${(props) => props.theme.padding.halfBase} ${(props) =>
  props.theme.padding.base};
    background-color: ${(props) => props.theme.color.darkBackgroundLighter};
    border: 1px solid ${(props) => props.theme.color.borderGreyDark};
    border-radius: ${(props) => props.theme.borderRadius.small};
    color: ${(props) => props.theme.color.offwhite};
  }
`;

export const StyledMuiGridItem = styled(Grid)`
  border-bottom: 1px solid ${(props) => props.theme.color.borderGreyDark};
  &:nth-child(odd) {
    border-right: 1px solid ${(props) => props.theme.color.borderGreyDark};
  }
  background: ${(props) => props.theme.color.darkBackgroundLighter};
`;

export const CustomGridItem = styled.div`
  padding: ${(props) => props.theme.padding.base}
    ${(props) => props.theme.padding.doubleBase};
`;
export const ColorSetting = styled(CustomGridItem)`
  color: ${(props) => props.theme.color.offwhite};
  ${(props) => props.theme.fonts.dashSetting}
  div {
    float: right;
    width: 3rem;
    height: 1rem;
    background: coral;
    border-radius: ${(props) => props.theme.borderRadius.xsmall};
  }
`;

export const FontFamilySetting = styled.div`
  color: ${(props) => props.theme.color.offwhite};
  ${(props) => props.theme.fonts.dashSetting}
`;

export const SimpleSliderSettingGrid = styled(CustomGridItem)`
  color: ${(props) => props.theme.color.offwhite};
  ${(props) => props.theme.fonts.dashSetting};

  input {
    display: block;
    width: 100%;
    margin-top: ${(props) => props.theme.margin.base};
  }
`;

export const SliderValueDisplay = styled.div`
  font-weight: normal;
  color: ${(props) => props.theme.color.middleGrey};
  float: right;
`;

/* Settings Pane ------------- */

export const DashSubSingleSelectSetting = styled.div`
    padding: ${(props) => props.theme.padding.base} 0 0;
    h4 {
    ${(props) => props.theme.fonts.dashSettingsHeader}
    color: ${(props) => props.theme.color.offwhite};
    margin-bottom: ${(props) => props.theme.margin.base};
    display: inline-block;
    line-height: 2.625rem;
  };
  select {
    padding: ${(props) => props.theme.padding.halfBase} ${(props) =>
  props.theme.padding.base};
  float: right;
  min-width: 250px;
    background-color: ${(props) => props.theme.color.darkBackgroundLighter};
    border: 1px solid ${(props) => props.theme.color.borderGreyDark};
    border-radius: ${(props) => props.theme.borderRadius.small};
    color: ${(props) => props.theme.color.offwhite};
  }
`;

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
