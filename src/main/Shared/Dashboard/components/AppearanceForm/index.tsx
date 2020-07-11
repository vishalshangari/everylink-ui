import React, { useEffect, useCallback } from "react";
import {
  DashboardViewWrap,
  SettingsGrid,
  SingleSelectSetting,
  SettingsHeader,
  BorderedGrid,
  StyledMuiGridItem,
  ColorSetting,
  SimpleSliderSettingGrid,
  SliderValueDisplay,
} from "..";
import { Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Element, ElementType } from "../../../../Builder/models";

export const AppearanceForm: React.FC<{
  element: Element<ElementType>;
  updateElement: (updateElement: Element<ElementType>) => void;
}> = ({ element, updateElement }) => {
  const { register, unregister, setValue, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      ...element.style,
    },
  });

  const fontSize = watch("fontSize") || element.style.fontSize;

  useEffect(() => {
    register("fontSize");
    return () => {
      unregister("fontSize");
    };
  }, [register, unregister]);

  const handleChange = useCallback(
    (e) => {
      const newElement = {
        ...element,
        style: {
          ...element.style,
          fontSize,
        },
      };
      updateElement(newElement);
      setValue("fontSize", parseInt(e.target.value));
    },
    [element, fontSize, setValue, updateElement]
  );
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
              {fontSize && (
                <SimpleSliderSettingGrid>
                  <label htmlFor="fontSize">Size</label>
                  <SliderValueDisplay>{fontSize}</SliderValueDisplay>
                  <input
                    id="fontSize"
                    type="range"
                    onChange={handleChange}
                    defaultValue={fontSize}
                    value={fontSize}
                  ></input>
                </SimpleSliderSettingGrid>
              )}
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
        <br />
        <br />
      </form>
    </DashboardViewWrap>
  );
};
