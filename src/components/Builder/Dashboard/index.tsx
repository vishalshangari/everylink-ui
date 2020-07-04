import React, { useState } from "react";
import { Panel } from "../../Shared/Panel";
import styled from "styled-components";
import { TransparentButton } from "../../../elements/Buttons";
import ContentPane from "./ContentPane";
import AppearancePane from "./AppearancePane";
import SettingsPane from "./SettingsPane";
import { Tab } from "react-tabs";
import {
  TabIcon,
  DashTab,
  DashTabList,
  TabTitle,
  DashPanelsContainer,
  StyledTabs,
  StyledTabPanel,
  PanelTopShadow,
} from "./DashboardStyledComponents/DashTab";
import {
  DashboardElementActions,
  DashboardDoneBtn,
  DashboardDeleteBtn,
  DashboardDuplicateBtn,
  DashboardTitle,
  DashboardTextboxSmall,
  DashboardTitleDisplay,
} from "./DashboardStyledComponents/DashFormats";
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

interface Dashboard {
  addBlock: () => void;
  panelRight: boolean;
  //   activeTab?: number;
}

interface StateDashTab extends Tab {
  isActive: boolean;
}

const StateDashTab = ({ isActive, ...props }: StateDashTab) => {
  return <DashTab isActive={isActive} {...props} />;
};

const Dashboard: React.FC<Dashboard> = ({ addBlock, panelRight }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Panel panelRight={panelRight}>
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
            <ContentPane></ContentPane>
          </StyledTabPanel>
          <StyledTabPanel>
            <PanelTopShadow></PanelTopShadow>
            <AppearancePane></AppearancePane>
          </StyledTabPanel>
          <StyledTabPanel>
            <SettingsPane></SettingsPane>
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
    </Panel>
  );
};

const DashboardContainer = styled.div`
  padding: ${(props) => props.theme.padding.base};
  border-bottom: ${(props) => props.theme.borders.dashboard};
`;

const NewContainerBtn = styled(TransparentButton)`
  height: 100%;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered}

  margin-top: 200px;
`;

const OptionsContainer = styled.div``;

export default Dashboard;
