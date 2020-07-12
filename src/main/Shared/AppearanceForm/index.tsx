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
} from "../Dashboard/components";
import { Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Element, ElementType } from "../../Builder/models";
import css from "./css.json";

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

  const handleChange = useCallback(
    (property, value) => {
      const newElement = {
        ...element,
        style: {
          ...element.style,
          [property]: value,
        },
      };
      console.log(newElement);
      updateElement(newElement);
      setValue(property, value);
    },
    [element, setValue, updateElement]
  );
  return (
    <DashboardViewWrap>
      <form>
        <SettingsGrid>
          {(css as typeof css).properties.map((property) => {
            return (
              <div key={property} style={{ display: "inline" }}>
                <div style={{ color: "white" }}>{property}</div>
                <input
                  name={property}
                  ref={register}
                  onChange={(e) => handleChange(property, e.target.value)}
                ></input>
              </div>
            );
            return null;
          })}
        </SettingsGrid>
      </form>
    </DashboardViewWrap>
  );
  {
    /* return (
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
   ); */
  }
};
