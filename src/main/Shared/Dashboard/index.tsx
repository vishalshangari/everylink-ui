import React, { useState } from "react";
import { Panel, PanelInnerContainer } from "../Panel";
import ContentPane from "./components/ContentPane";
import AppearancePane from "./components/AppearancePane";
import SettingsPane from "./components/SettingsPane";
import { Tab } from "react-tabs";
import {
  TabIcon,
  DashTab,
  DashTabList,
  TabTitle,
  DashPanelsContainer,
  StyledTabs,
  StyledTabPanel,
  DashboardElementActions,
  DashboardDoneBtn,
  DashboardDeleteBtn,
  DashboardDuplicateBtn,
  DashboardTitle,
  DashboardTextboxSmall,
  DashboardTitleDisplay,
  PanelTopShadow,
} from "./components/index";
import {
  MdFormatPaint,
  MdSettings,
  MdTextFields,
  MdDelete,
  MdFilterNone,
  MdCheckCircle,
  MdModeEdit,
} from "react-icons/md";
import { IconContext } from "react-icons";

interface DashboardProps {
  addBlock: () => void;
  panelRight: boolean;
  isDesktop: boolean;
}

interface StateDashTab extends Tab {
  isActive: boolean;
}

const StateDashTab = ({ isActive, ...props }: StateDashTab) => {
  return <DashTab isActive={isActive} {...props} />;
};

const Dashboard: React.FC<DashboardProps> = ({
  addBlock,
  panelRight,
  isDesktop,
}) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Panel isDesktop={isDesktop} panelRight={panelRight}>
      <PanelInnerContainer isDesktop={isDesktop}>
        <DashboardTitleDisplay>
          <DashboardTitle>
            <h3>Textbox</h3>
          </DashboardTitle>

          <DashboardTextboxSmall>
            Add label <MdModeEdit />
          </DashboardTextboxSmall>
        </DashboardTitleDisplay>

        <StyledTabs
          selectedIndex={activeTab}
          onSelect={(tabIndex) => setActiveTab(tabIndex)}
        >
          <DashTabList>
            <IconContext.Provider value={{ size: "1rem" }}>
              <DashTab tabIndex="0" isActive={activeTab === 0}>
                <TabIcon>
                  <MdTextFields />
                </TabIcon>
                <TabTitle>Textbox</TabTitle>
              </DashTab>
              <DashTab tabIndex="1" isActive={activeTab === 1}>
                <TabIcon>
                  <MdFormatPaint />
                </TabIcon>
                <TabTitle>Appearance</TabTitle>
              </DashTab>
              <DashTab tabIndex="2" isActive={activeTab === 2}>
                <TabIcon>
                  <MdSettings />
                </TabIcon>
                <TabTitle>Settings</TabTitle>
              </DashTab>
            </IconContext.Provider>
          </DashTabList>

          <DashPanelsContainer>
            <StyledTabPanel>
              <ContentPane />
            </StyledTabPanel>
            <StyledTabPanel>
              {/* <PanelTopShadow /> */}
              <AppearancePane />
            </StyledTabPanel>
            <StyledTabPanel>
              <SettingsPane />
            </StyledTabPanel>
          </DashPanelsContainer>
        </StyledTabs>
        <DashboardElementActions>
          <DashboardDoneBtn>
            <span>
              <MdCheckCircle />
            </span>
            Done
          </DashboardDoneBtn>
          <DashboardDuplicateBtn>
            <span>
              <MdFilterNone />
            </span>
            Duplicate
          </DashboardDuplicateBtn>
          <DashboardDeleteBtn>
            <span>
              <MdDelete />
            </span>
            Delete
          </DashboardDeleteBtn>
        </DashboardElementActions>
      </PanelInnerContainer>
    </Panel>
  );
};

export default Dashboard;
