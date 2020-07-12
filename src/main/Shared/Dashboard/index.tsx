import React, { useState } from "react";
import { Panel, PanelInnerContainer } from "../Panel";
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
} from "./components/index";
import {
  MdFormatPaint,
  MdDelete,
  MdFilterNone,
  MdCheckCircle,
  MdModeEdit,
} from "react-icons/md";
import { IconContext } from "react-icons";
import { DashboardProps } from "./models";
import { AppearanceForm } from "../AppearanceForm";

const Dashboard: React.FC<DashboardProps> = ({
  panelRight,
  isDesktop,
  selectedElement,
  updateElement,
}) => {
  const [activeTab, setActiveTab] = useState(0);
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
          defaultIndex={0}
          onSelect={(tabIndex) => setActiveTab(tabIndex)}
        >
          <DashTabList>
            <IconContext.Provider value={{ size: "1rem" }}>
              <DashTab isActive={activeTab === 0}>
                <TabIcon>
                  <MdFormatPaint />
                </TabIcon>
                <TabTitle>Appearance</TabTitle>
              </DashTab>
            </IconContext.Provider>
          </DashTabList>

          <DashPanelsContainer>
            <StyledTabPanel>
              {selectedElement && (
                <AppearanceForm
                  element={selectedElement}
                  updateElement={updateElement}
                />
              )}
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
