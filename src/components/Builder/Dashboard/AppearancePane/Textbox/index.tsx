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
  SimpleSliderSetting,
  SliderValueDisplay,
  ColorSetting,
  FontFamilySetting,
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
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <ColorSetting>
                <label>Color</label>

                <div></div>
              </ColorSetting>
            </Grid>
            <Grid item xs={6}>
              <FontFamilySetting>
                <label>Font Family</label>
              </FontFamilySetting>
            </Grid>
            <Grid item xs={6}>
              <SimpleSliderSetting>
                <label htmlFor="fontSize">Size</label>
                <SliderValueDisplay>1.25</SliderValueDisplay>
                <input id="fontSize" type="range"></input>
              </SimpleSliderSetting>
            </Grid>
            <Grid item xs={6}>
              <SimpleSliderSetting>
                <label htmlFor="fontSize">Line Height</label>
                <SliderValueDisplay>1.5</SliderValueDisplay>
                <input id="fontSize" type="range"></input>
              </SimpleSliderSetting>
            </Grid>
            <Grid item xs={6}>
              <SimpleSliderSetting>
                <label htmlFor="fontSize">Weight</label>
                <SliderValueDisplay>Semi-Bold</SliderValueDisplay>
                <input id="fontSize" type="range"></input>
              </SimpleSliderSetting>
            </Grid>
            <Grid item xs={6}>
              <SimpleSliderSetting>
                <label htmlFor="fontSize">Letter Spacing</label>
                <SliderValueDisplay>3</SliderValueDisplay>
                <input id="fontSize" type="range"></input>
              </SimpleSliderSetting>
            </Grid>
          </Grid>
        </SettingsGrid>
      </form>
    </DashboardViewWrap>
  );
};

export default Textbox;
