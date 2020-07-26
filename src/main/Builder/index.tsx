import React, { useState, createContext } from "react";
import DeviceSimulator from "../Shared/DeviceSimulator";
import Dashboard from "../Shared/Dashboard";
import { Drawer, Dialog } from "@material-ui/core";
import "rc-tooltip/assets/bootstrap.css";
import { Box, BuilderContainer, ViewContainer } from "./components";
import { Block, BuilderProps, Data, ControlPanelActions } from "./models";
import { dataImport } from "../../data/test";
import {
  MdAddCircle,
  MdWbSunny,
  MdSwapHoriz,
  MdSave,
  MdUndo,
  MdRedo,
  MdViewHeadline,
  MdAccountCircle,
} from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { ResponsiveControlCenter } from "../Shared/ResponsiveControlPanel";
import { ControlCenterActionDef } from "../Shared/ResponsiveControlPanel/models";
import { AnchoredActionButton } from "../Shared/AnchoredActionButton";
import { CustomDialog } from "../Shared/CustomDialog";
import ElementSelector from "../Shared/ElementSelector";
import { BsChevronRight } from "react-icons/bs";
import AddBlockButton from "../Shared/AddBlockButton";

const data: Data = dataImport;

const InitialElements: Block[] = [];

export const BuilderContext = createContext<Data>({} as Data);

const Builder: React.FC<BuilderProps> = (props) => {
  const [panelRight, setPanelRight] = useState(true);
  const [dashboardHidden, setDashboardHidden] = useState(false);
  const [elementDialogOpen, setElementDialogOpen] = useState(false);
  const handleElementDialogOpen = () => {
    setElementDialogOpen(true);
  };

  const handleElementDialogClose = () => {
    setElementDialogOpen(false);
  };
  const { displaySize, handleThemeChange, currentTheme } = props;
  const [blocks, setBlocks] = useState(InitialElements);
  const addBlock = () => {
    console.log(blocks);
    const color =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    setBlocks([...blocks, <Box backgroundColor={color} key={blocks.length} />]);
  };

  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);

  const controlCenterActions: ControlCenterActionDef[][] = [
    [
      {
        type: "Publish",
        description: "Publish site",
        icon: <MdSave />,
        action: () => console.log("Publish"),
      },
      {
        type: "Undo",
        description: "Undo last change",
        icon: <MdUndo />,
        action: () => console.log("Undo"),
      },
      {
        type: "Redo",
        description: "Redo last change",
        icon: <MdRedo />,
        action: () => console.log("Redo"),
      },
    ],
    [
      {
        type: "Mode",
        description: `Switch to ${
          currentTheme === `dark` ? `default` : `dark`
        } mode`,
        icon:
          currentTheme === `dark` ? (
            <IoMdSunny />
          ) : (
            <WiMoonAltWaningCrescent4 />
          ),
        action: () => handleThemeChange(currentTheme === "dark" ? "" : "dark"),
      },
      {
        type: "Switch",
        description: "Switch editor layout",
        icon: <MdSwapHoriz />,
        action: () => setPanelRight(!panelRight),
      },
    ],
  ];

  const mobileControlCenterActions: ControlCenterActionDef[] = [
    {
      type: "Publish",
      description: "Publish site",
      icon: <MdSave />,
    },
    {
      type: "Undo",
      description: "Undo last change",
      icon: <MdUndo />,
    },
    {
      type: "Redo",
      description: "Redo last change",
      icon: <MdRedo />,
    },
    {
      type: "Dashboard",
      description: "Show dashboard",
      icon: <MdViewHeadline />,
      action: () =>
        setMobileDashboardOpen(
          (prevMobileDashboardOpen) => !prevMobileDashboardOpen
        ),
    },
  ];

  return (
    <BuilderContext.Provider value={data as Data}>
      <BuilderContainer>
        <AddBlockButton
          displaySize={displaySize}
          side={panelRight ? "left" : "right"}
          handleAddBlock={handleElementDialogOpen}
        ></AddBlockButton>
        <ViewContainer>
          <AnchoredActionButton
            displaySize={displaySize}
            type="User page"
            tooltip
            side={panelRight ? "left" : "right"}
            description="Back to user page"
            icon={<MdAccountCircle />}
            action={() => console.log("Back to user page")}
          />
          <AnchoredActionButton
            displaySize={displaySize}
            type="Show dashboard"
            tooltip={false}
            side={panelRight ? "right" : "left"}
            description={dashboardHidden ? "Show dashboard" : "Hide dashboard"}
            icon={dashboardHidden ? <MdViewHeadline /> : <BsChevronRight />}
            action={() =>
              setDashboardHidden((prevDashboardHidden) => !prevDashboardHidden)
            }
          />
          <ResponsiveControlCenter
            displaySize={displaySize}
            options={controlCenterActions}
            mobileOptions={mobileControlCenterActions}
          />
          <DeviceSimulator>{blocks}</DeviceSimulator>
        </ViewContainer>
        {/* Mobile Temporary Drawer Dashboard 
          TODO: add responsive wrapper for Drawer like control center
        */}
        {displaySize !== "xl" && displaySize !== "lg" ? (
          <Drawer
            open={mobileDashboardOpen}
            anchor={panelRight ? "right" : "left"}
            variant={"temporary"}
            onClose={() =>
              setMobileDashboardOpen(
                (prevMobileDashboardOpen) => !prevMobileDashboardOpen
              )
            }
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Dashboard
              isDesktop={false}
              addBlock={addBlock}
              panelRight={panelRight}
              dashboardHidden={false}
              setDashboardHidden={setDashboardHidden}
            />
          </Drawer>
        ) : (
          <Dashboard
            isDesktop
            addBlock={addBlock}
            panelRight={panelRight}
            dashboardHidden={dashboardHidden}
            setDashboardHidden={setDashboardHidden}
          />
        )}
        <CustomDialog
          title="Add new element"
          open={elementDialogOpen}
          onClose={handleElementDialogClose}
          handleElementDialogClose={handleElementDialogClose}
          maxWidth="md"
          fullScreen={displaySize !== "xl" && displaySize !== "lg"}
        >
          <ElementSelector
            container={addBlock}
            text={addBlock}
            closeElementDialog={handleElementDialogClose}
          />
        </CustomDialog>
      </BuilderContainer>
    </BuilderContext.Provider>
  );
};

export default Builder;
