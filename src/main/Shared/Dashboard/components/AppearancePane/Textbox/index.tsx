import React from "react";
import {
  SettingsGroup,
  SettingsItem,
  DashboardViewWrap,
  DashboardDivider,
  PaddedDashboardContainer,
  DashboardTextEditor,
  DashboardElementActions,
  DashboardDoneBtn,
  DashboardDeleteBtn,
  DashboardDuplicateBtn,
  SettingsGrid,
  SimpleSliderSettingGrid,
  SliderValueDisplay,
  FontFamilySetting,
  CustomGridItem,
  BorderedGrid,
  StyledMuiGridItem,
  SettingsHeader,
  SingleSelectSetting,
} from "../../index";
import {
  SelectSetting,
  SliderSetting,
  SpacingSetting,
  ColorSetting,
  AlignmentSetting,
} from "../../Form";
import {
  MdDelete,
  MdFilterNone,
  MdCheckCircle,
  MdModeEdit,
} from "react-icons/md";
import Grid from "@material-ui/core/Grid";

const fonts = ["Auto", "Helvetica", "Arial", "Times New Roman", "Dax"];

const Textbox = () => {
  return (
    <DashboardViewWrap>
      <form>
        <SettingsGroup>
          <SettingsItem>
            <SelectSetting
              label="Font"
              options={fonts}
              initValue="Auto"
              autoText="Font will be inherited from the parent block (or site default)."
            />
          </SettingsItem>
          <AlignmentSetting label="Justify" />
        </SettingsGroup>

        <DashboardDivider />

        <SettingsGroup>
          <ColorSetting label="Text"></ColorSetting>
          <ColorSetting label="Background"></ColorSetting>
        </SettingsGroup>

        <DashboardDivider />

        <SettingsGroup>
          <SettingsItem>
            <SliderSetting
              label="Size"
              min={0}
              max={10}
              step={1}
              initValue={3}
            />
          </SettingsItem>
          <SettingsItem>
            <SliderSetting
              label="Weight"
              min={0}
              max={10}
              step={1}
              initValue={7}
            />
          </SettingsItem>
        </SettingsGroup>

        <DashboardDivider />

        <SettingsGroup>
          <SpacingSetting type="margin" />
        </SettingsGroup>

        <DashboardDivider />

        <SettingsGroup>
          <SpacingSetting type="padding" />
        </SettingsGroup>
      </form>
    </DashboardViewWrap>
  );
};

export default Textbox;
