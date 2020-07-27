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

export const SettingsGroup = styled(SidePaddedDashboardContainer)`
  display: grid;
  gap: 2rem;
  grid-template-columns: ${(props) => props.theme.scales.settingsGrid};
`;

export const SettingsItem = styled.div<{ flex?: boolean }>`
  ${({ flex, theme }) => (flex ? theme.flex.centered : ``)};
`;

export const DashboardDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.colors.dashboardBorders};
  margin: 2rem 0;
`;

export const DashboardTextEditor = styled(SidePaddedDashboardContainer)`
  min-height: 150px;
  background: ${(props) => props.theme.color.offwhite};
  padding: ${(props) => props.theme.padding.base};
  border-radius: ${(props) => props.theme.borderRadius.small};
`;

export const DashboardElementActions = styled.div`
  ${(props) => props.theme.flex.row};
  border-top: 1px solid ${(props) => props.theme.colors.dashboardBorders};
  }
`;

export const DashboardButtonBase = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  cursor: pointer;
  padding: 1.5rem ${(props) => props.theme.padding.base};
  color: ${(props) => props.theme.color.offwhite};
  background: ${(props) => props.theme.colors.dashboardActionBtn};
  &:hover {
    background: ${(props) => props.theme.colors.dashboardActionBtnHover};
  }
`;

/* Content Pane -------- Action Buttons */

export const DashboardDoneBtn = styled(DashboardButtonBase)`
  flex: 4;
  background: ${(props) => props.theme.colors.dashboardDoneBtn};
  span {
    line-height: 1.375rem;
    padding-right: ${(props) => props.theme.padding.halfBase};
  }
  &:hover {
    background: ${(props) => props.theme.colors.dashboardDoneBtnHover};
  }
`;

export const DashboardDuplicateBtn = styled(DashboardButtonBase)``;

export const DashboardDeleteBtn = styled(DashboardButtonBase)``;

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

export const DashboardPanelsContainer = styled.div`
  padding: 2rem 0;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  overflow-x: hidden;
  position: relative;
  background: ${(props) => props.theme.colors.dashboardActiveTab};

  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.dashboardBg};
    border-left: 1px solid ${(props) => props.theme.colors.dashboardBorders};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.dashboardBorders};
    -webkit-transition: 0.2s ease all;
    &:hover {
      background: ${(props) => props.theme.colors.dashboardScrollbarHover};
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
    ${(props) => props.theme.colors.dashboardActiveTab} 5%,
    rgba(255, 255, 255, 0) 50%
  );
`;

export const StyledTabs = styled(Tabs)`
  margin-top: 1rem;
  -webkit-tap-highlight-color: transparent;
  flex-grow: 1;
  min-height: 0;
  ${(props) => props.theme.flex.column}
`;

export const DashboardTab = styled(Tab)<{ isactive: boolean }>`
  justify-content: center;
  list-style: none;
  position: relative;
  padding: ${(props) => props.theme.padding.base};
  ${(props) => props.theme.flex.row}
  cursor: pointer;
  flex: 1;
  color: ${(props) => props.theme.colors.textTertiary};
  > * {
    transition: 0.2s ease all;
    ${(props) =>
      props.isactive
        ? `
  color: ${props.theme.colors.textPrimary};`
        : ``};
  }

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  &:first-child {
    border-top-left-radius: 0;
  }

  &:last-child {
    border-top-right-radius: 0;
  }

  &:hover {
    > * {
      color: ${(props) => props.theme.colors.textPrimary};
    }
  }
  &:focus {
    outline: none;
  }

  /* Border magic */

  border-top: ${(props) =>
    `1px solid ` +
    (props.isactive
      ? `${props.theme.colors.dashboardBorders}`
      : `transparent`)};

  border-bottom: ${(props) =>
    `1px solid ` +
    (!props.isactive
      ? `${props.theme.colors.dashboardBorders}`
      : `transparent`)};

  &:first-child {
    border-right: ${(props) =>
      `1px solid ` +
      (props.isactive
        ? `${props.theme.colors.dashboardBorders}`
        : `transparent`)};
  }

  &:nth-child(2) {
    border-right: ${(props) =>
      `1px solid ` +
      (props.isactive
        ? `${props.theme.colors.dashboardBorders}`
        : `transparent`)};
    border-left: ${(props) =>
      `1px solid ` +
      (props.isactive
        ? `${props.theme.colors.dashboardBorders}`
        : `transparent`)};
  }

  &:last-child {
    border-left: ${(props) =>
      `1px solid ` +
      (props.isactive
        ? `${props.theme.colors.dashboardBorders}`
        : `transparent`)};
  }

  background: ${(props) =>
    props.isactive ? props.theme.colors.dashboardActiveTab : "transparent"};
`;

export const TabIcon = styled.div`
  padding-right: ${(props) => props.theme.padding.halfBase};
  display: inline-block;
  line-height: 1.375rem;
`;

export const TabTitle = styled.div`
  display: inline-block;
`;

export const DashboardTabList = styled(TabList)`
  padding: 0;
  position: relative;
  margin: 0;
  ${(props) => props.theme.flex.row}
  background: ${(props) => props.theme.colors.dashboardTitleBg};
  z-index: 1;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: calc(100% - 0.5rem);
    top: 100%;
    background: tomato;
    height: 1em;
    background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.dashboardActiveTab} 5%,
    rgba(255, 255, 255, 0) 50%
  );
  }
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
