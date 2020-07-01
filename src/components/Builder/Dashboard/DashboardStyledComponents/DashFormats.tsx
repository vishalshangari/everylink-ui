import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

/* General Dashboard Components */

export const PaddedDashboardContainer = styled.div`
  padding: ${(props) => props.theme.padding.base}
    ${(props) => props.theme.padding.doubleBase};
`;

export const SidePaddedDashboardContainer = styled.div`
  padding: 0 ${(props) => props.theme.padding.doubleBase};
`;

export const DashboardViewWrap = styled.div`
  padding: ${(props) => props.theme.padding.base} 0 0;
`;

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
  margin: ${(props) => props.theme.margin.doubleBase} 0 0;
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
