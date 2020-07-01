import React, { useState } from "react";
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
  DashSubSingleSelectSetting,
} from "../../DashboardStyledComponents/DashFormats";
import {
  MdDelete,
  MdFilterNone,
  MdCheckCircle,
  MdModeEdit,
} from "react-icons/md";
import Grid from "@material-ui/core/Grid";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import {
  TabIcon,
  DashSubTab,
  DashSubTabs,
  DashSubTabList,
  DashSubTabsWrap,
  TabTitle,
  StyledTabs,
  StyledTabPanel,
} from "../../DashboardStyledComponents/DashTab";

interface StateDashSubTab extends Tab {
  isActive: boolean;
}

const StateDashSubTab = ({ isActive, ...props }: StateDashSubTab) => {
  return <DashSubTab isActive={isActive} {...props} />;
};

const Textbox = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <DashboardViewWrap>
      <DashSubTabsWrap>
        <DashSubTabs
          selectedIndex={activeTab}
          onSelect={(tabIndex) => setActiveTab(tabIndex)}
        >
          <DashSubTabList>
            <DashSubTab tabIndex="0" isActive={activeTab === 0}>
              Animation
            </DashSubTab>
            <DashSubTab tabIndex="1" isActive={activeTab === 1}>
              Actions
            </DashSubTab>
            <DashSubTab tabIndex="2" isActive={activeTab === 2}>
              Custom
            </DashSubTab>
          </DashSubTabList>

          <TabPanel>
            <DashboardViewWrap>
              <form>
                <DashSubSingleSelectSetting>
                  <h4>Action</h4>
                  <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </DashSubSingleSelectSetting>
                <DashSubSingleSelectSetting>
                  <h4>Duration</h4>
                  <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </DashSubSingleSelectSetting>
                <DashSubSingleSelectSetting>
                  <h4>Sequence</h4>
                  <select name="cars" id="cars">
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="mercedes">3</option>
                    <option value="audi">4</option>
                  </select>
                </DashSubSingleSelectSetting>
              </form>
            </DashboardViewWrap>
          </TabPanel>
          <TabPanel>
            <DashboardViewWrap>
              <form>
                <DashSubSingleSelectSetting>
                  <h4>Action 1</h4>
                  <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </DashSubSingleSelectSetting>
                <DashSubSingleSelectSetting>
                  <h4>Action 2</h4>
                  <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </DashSubSingleSelectSetting>
                <DashSubSingleSelectSetting>
                  <h4>Action 3</h4>
                  <select name="cars" id="cars">
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="mercedes">3</option>
                    <option value="audi">4</option>
                  </select>
                </DashSubSingleSelectSetting>
              </form>
            </DashboardViewWrap>
          </TabPanel>
          <TabPanel>
            <DashboardViewWrap>
              <form>
                <DashboardTextbox>
                  Enter custom HTML and CSS code.
                </DashboardTextbox>
              </form>
            </DashboardViewWrap>
          </TabPanel>
        </DashSubTabs>
      </DashSubTabsWrap>
    </DashboardViewWrap>
  );
};

export default Textbox;
