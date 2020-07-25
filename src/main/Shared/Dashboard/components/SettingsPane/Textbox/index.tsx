import React, { useState } from "react";
import { DashboardViewWrap, DashSubSingleSelectSetting } from "../../index";
import { Tab, TabPanel } from "react-tabs";
import {
  DashSubTab,
  DashSubTabs,
  DashSubTabList,
  DashSubTabsWrap,
} from "../../index";

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
              <form>Enter custom HTML and CSS code.</form>
            </DashboardViewWrap>
          </TabPanel>
        </DashSubTabs>
      </DashSubTabsWrap>
    </DashboardViewWrap>
  );
};

export default Textbox;
