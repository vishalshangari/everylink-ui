import React, { useState, createContext } from "react";
import DeviceSimulator from "../Shared/DeviceSimulator";
import Dashboard from "../Shared/Dashboard";
import Drawer from "@material-ui/core/Drawer";
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

const data: Data = dataImport;

const InitialElements: Block[] = [];

export const BuilderContext = createContext<Data>({} as Data);

const Builder: React.FC<BuilderProps> = (props) => {
  const [panelRight, setPanelRight] = useState(true);
  const [dashboardHidden, setDashboardHidden] = useState(false);
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
        type: "Add",
        description: "Add a new container",
        icon: <MdAddCircle />,
        action: addBlock,
      },
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
      type: "Add",
      description: "Add a new container",
      icon: <MdAddCircle />,
    },
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
  ];

  return (
    <BuilderContext.Provider value={data as Data}>
      <BuilderContainer>
        <ViewContainer>
          <AnchoredActionButton
            displaySize={displaySize}
            type="User page"
            side={panelRight ? "left" : "right"}
            description="Back to user page"
            icon={<MdAccountCircle />}
            action={() => console.log("Back to user page")}
          />
          <AnchoredActionButton
            displaySize={displaySize}
            type="Show dashboard"
            side={panelRight ? "right" : "left"}
            description="Show dashboard"
            icon={<MdViewHeadline />}
            action={() => setDashboardHidden(false)}
          />
          <ResponsiveControlCenter
            displaySize={displaySize}
            options={controlCenterActions}
            mobileOptions={mobileControlCenterActions}
          />
          <DeviceSimulator>{blocks}</DeviceSimulator>
        </ViewContainer>
        {/* Mobile Temporary Drawer Dashboard */}
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
      </BuilderContainer>
    </BuilderContext.Provider>
  );
};

export default Builder;
