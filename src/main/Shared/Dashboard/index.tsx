import React, { useState } from "react";
import { Panel, PanelInnerContainer } from "../Panel";
import ContentPane from "./components/ContentPane";
import AppearancePane from "./components/AppearancePane";
import SettingsPane from "./components/SettingsPane";
import { Tab } from "react-tabs";
import { Transition } from "react-transition-group";
import {
  TabIcon,
  DashboardTab,
  DashboardTabList,
  TabTitle,
  DashboardPanelsContainer,
  StyledTabs,
  StyledTabPanel,
  DashboardElementActions,
  DashboardDoneBtn,
  DashboardDeleteBtn,
  DashboardDuplicateBtn,
} from "./components/index";
import DashboardHeader from "./components/DashboardHeader";
import {
  MdFormatPaint,
  MdSettings,
  MdTextFields,
  MdDelete,
  MdFilterNone,
  MdCheckCircle,
} from "react-icons/md";
import { IconContext } from "react-icons";
import StyleSelector from "./components/StyleSelector";

interface DashboardProps {
  addBlock: () => void;
  panelRight: boolean;
  isDesktop: boolean;
  dashboardHidden: boolean;
  setDashboardHidden: (prevDashboardHidden: boolean) => void;
}

interface StateDashTab extends Tab {
  isActive: boolean;
}

const StateDashTab = ({ isActive, ...props }: StateDashTab) => {
  return <DashboardTab isActive={isActive} {...props} />;
};

const Dashboard: React.FC<DashboardProps> = ({
  addBlock,
  panelRight,
  isDesktop,
  dashboardHidden,
  setDashboardHidden,
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [styleSelectorExpanded, setStyleSelectorExpanded] = useState(false);
  const handleStyleSelectorExpanded = () => {
    setStyleSelectorExpanded(
      (prevStyleSelectorExpanded) => !prevStyleSelectorExpanded
    );
  };

  const styles = ["(none)", "Default", "Heading", "Body", "Footer"];

  const tabs = [
    { title: "Content", icon: <MdTextFields />, context: <ContentPane /> },
    {
      title: "Appearance",
      icon: <MdFormatPaint />,
      context: <AppearancePane />,
    },
    { title: "Settings", icon: <MdSettings />, context: <SettingsPane /> },
  ];

  return (
    <Panel
      dashboardHidden={dashboardHidden}
      isDesktop={isDesktop}
      panelRight={panelRight}
    >
      <PanelInnerContainer isDesktop={isDesktop}>
        <DashboardHeader
          title="Textbox"
          style="Default"
          handleStyleSelectorExpanded={handleStyleSelectorExpanded}
          styleSelectorExpanded={styleSelectorExpanded}
        />

        <Transition in={styleSelectorExpanded} timeout={500}>
          {(state) => (
            <StyleSelector styles={styles} state={state}></StyleSelector>
          )}
        </Transition>

        <StyledTabs
          selectedIndex={activeTab}
          onSelect={(tabIndex) => setActiveTab(tabIndex)}
        >
          <DashboardTabList>
            <IconContext.Provider value={{ size: "1rem" }}>
              {tabs.map((tab, index) => (
                <DashboardTab key={index} isActive={activeTab === index}>
                  <TabIcon>{tab.icon}</TabIcon>
                  <TabTitle>{tab.title}</TabTitle>
                </DashboardTab>
              ))}
            </IconContext.Provider>
          </DashboardTabList>

          <DashboardPanelsContainer>
            {tabs.map((tab, index) => (
              <StyledTabPanel key={index}>{tab.context}</StyledTabPanel>
            ))}
          </DashboardPanelsContainer>
        </StyledTabs>
        <DashboardElementActions>
          <DashboardDoneBtn
            onClick={() => setDashboardHidden(!dashboardHidden)}
          >
            Done
          </DashboardDoneBtn>
          <DashboardDuplicateBtn>
            <span>
              <MdFilterNone />
            </span>
          </DashboardDuplicateBtn>
          <DashboardDeleteBtn>
            <span>
              <MdDelete />
            </span>
          </DashboardDeleteBtn>
        </DashboardElementActions>
      </PanelInnerContainer>
    </Panel>
  );
};

export default Dashboard;
