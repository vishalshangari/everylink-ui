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
  background: ${(props) => props.theme.color.borderGrey};
  &:hover {
    background: ${(props) => props.theme.color.lightMiddleGrey};
  }
`;

export const DashboardDeleteBtn = styled(DashboardButtonBase)`
  background: ${(props) => props.theme.color.deleteBtn};
  &:hover {
    background: ${(props) => props.theme.color.deleteBtnHover};
  }
`;

export const DashboardViewWrap = styled.div`
  padding: ${(props) => props.theme.padding.doubleBase} 0 0;
`;

/* Appearance Pane -------- Configuration Options */

export const SettingsGrid = styled(SidePaddedDashboardContainer)`
  flex-grow: 1;
`;

export const ColorSetting = styled.div`
  color: ${(props) => props.theme.color.offwhite};
  ${(props) => props.theme.fonts.dashSetting}
  div {
    float: right;
    width: 1rem;
    height: 1rem;
    background: coral;
  }
`;

export const FontFamilySetting = styled.div`
  color: ${(props) => props.theme.color.offwhite};
  ${(props) => props.theme.fonts.dashSetting}
`;

export const SimpleSliderSetting = styled.div`
  color: ${(props) => props.theme.color.offwhite};
  ${(props) => props.theme.fonts.dashSetting}
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
