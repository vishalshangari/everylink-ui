import React from "react";
import {
  DashboardHeader,
  DashboardTextbox,
  DashboardViewWrap,
  DashboardTextboxSmall,
  PaddedDashboardContainer,
  DashboardTextEditor,
  DashboardElementActions,
  DashboardDoneBtn,
  DashboardDeleteBtn,
  DashboardDuplicateBtn,
  SettingsGrid,
  SimpleSliderSettingGrid,
  SliderValueDisplay,
  ColorSetting,
  FontFamilySetting,
  CustomGridItem,
  BorderedGrid,
  StyledMuiGridItem,
  SettingsHeader,
  SingleSelectSetting,
} from "../../DashboardStyledComponents/DashFormats";
import {
  MdDelete,
  MdFilterNone,
  MdCheckCircle,
  MdModeEdit,
} from "react-icons/md";
import Grid from "@material-ui/core/Grid";

const Textbox = () => {
  return (
    <DashboardViewWrap>
      <form>
        <SettingsGrid>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <SingleSelectSetting>
                <h4>Theme</h4>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </SingleSelectSetting>
            </Grid>
            <Grid item xs={6}>
              <SingleSelectSetting>
                <h4>Font</h4>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </SingleSelectSetting>
            </Grid>
          </Grid>
        </SettingsGrid>
        <SettingsHeader>
          <h4>Color</h4>
        </SettingsHeader>
        <SettingsGrid>
          <BorderedGrid container spacing={0}>
            <StyledMuiGridItem item xs={6}>
              <ColorSetting>
                <label>Text</label>
                <div></div>
              </ColorSetting>
            </StyledMuiGridItem>
            <StyledMuiGridItem item xs={6}>
              <ColorSetting>
                <label>Background</label>
                <div></div>
              </ColorSetting>
            </StyledMuiGridItem>
          </BorderedGrid>
        </SettingsGrid>
        <SettingsHeader>
          <h4>Character</h4>
        </SettingsHeader>
        <SettingsGrid>
          <BorderedGrid container spacing={0}>
            <StyledMuiGridItem item xs={6}>
              <SimpleSliderSettingGrid>
                <label htmlFor="fontSize">Size</label>
                <SliderValueDisplay>1.25</SliderValueDisplay>
                <input id="fontSize" type="range"></input>
              </SimpleSliderSettingGrid>
            </StyledMuiGridItem>
            <StyledMuiGridItem item xs={6}>
              <SimpleSliderSettingGrid>
                <label htmlFor="fontSize">Line Height</label>
                <SliderValueDisplay>1.5</SliderValueDisplay>
                <input id="fontSize" type="range"></input>
              </SimpleSliderSettingGrid>
            </StyledMuiGridItem>
            <StyledMuiGridItem item xs={6}>
              <SimpleSliderSettingGrid>
                <label htmlFor="fontSize">Weight</label>
                <SliderValueDisplay>Semi-Bold</SliderValueDisplay>
                <input id="fontSize" type="range"></input>
              </SimpleSliderSettingGrid>
            </StyledMuiGridItem>
            <StyledMuiGridItem item xs={6}>
              <SimpleSliderSettingGrid>
                <label htmlFor="fontSize">Letter Spacing</label>
                <SliderValueDisplay>3</SliderValueDisplay>
                <input id="fontSize" type="range"></input>
              </SimpleSliderSettingGrid>
            </StyledMuiGridItem>
          </BorderedGrid>
        </SettingsGrid>
      </form>
    </DashboardViewWrap>
  );
};

export default Textbox;
