import React, { useState, createContext } from "react";
import DeviceSimulator from "../Shared/DeviceSimulator";
import Dashboard from "../Shared/Dashboard";
import Drawer from "@material-ui/core/Drawer";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import {
  Box,
  BuilderContainer,
  ViewContainer,
  ControlCenter,
  ControlCenterButton,
  ControlCenterMainActions,
  ControlCenterSettings,
  MobileControlCenter,
} from "./components";
import { Block, BuilderProps, Data, ControlPanelActions } from "./models";
import { dataImport } from "../../data/test";
import {
  MdAddCircle,
  MdWbSunny,
  MdSwapHoriz,
  MdSave,
  MdUndo,
  MdRedo,
  MdClose,
} from "react-icons/md";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const data: Data = dataImport;

const InitialElements: Block[] = [];

export const BuilderContext = createContext<Data>({} as Data);

const Builder: React.FC<BuilderProps> = (props) => {
  const [panelRight, setPanelRight] = useState(true);
  const { displaySize, handleThemeChange, currentTheme } = props;
  const [blocks, setBlocks] = useState(InitialElements);
  const addBlock = () => {
    console.log(blocks);
    const color =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    setBlocks([...blocks, <Box backgroundColor={color} key={blocks.length} />]);
  };

  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);

  const log = console.log;

  const controlPanelActions: ControlPanelActions[] = [
    {
      type: "Add",
      description: "Add a new container",
      icon: <MdAddCircle />,
      action: () => addBlock(),
    },
    {
      type: "Publish",
      description: "Publish site",
      icon: <MdSave />,
      action: () => log("publish"),
    },
    {
      type: "Undo",
      description: "Undo last change",
      icon: <MdUndo />,
      action: () => log("undo"),
    },
    {
      type: "Redo",
      description: "Redo last change",
      icon: <MdRedo />,
      action: () => log("redo"),
    },
    {
      type: "Exit",
      description: "Exit builder",
      icon: <MdClose />,
      action: () => log("exit"),
    },
  ];

  const controlPanelSettingsOptions: ControlPanelActions[] = [
    {
      type: "Color mode",
      description: `Switch to ${
        currentTheme === "dark" ? "default" : "dark"
      } theme`,
      icon:
        currentTheme === "dark" ? <MdWbSunny /> : <WiMoonAltWaningCrescent4 />,
      action: () => handleThemeChange(currentTheme === "dark" ? "" : "dark"),
    },
    {
      type: "Editor layout",
      description: "Switch editor layout",
      icon: <MdSwapHoriz />,
      action: () => setPanelRight(!panelRight),
    },
  ];

  const ResponsiveControlCenterType: React.FC<{
    children: React.ReactNode;
  }> = ({ children }) => {
    return displaySize == "xl" || displaySize == "lg" ? (
      <ControlCenter>{children}</ControlCenter>
    ) : (
      <MobileControlCenter>{children}</MobileControlCenter>
    );
  };

  const createControlPanelTooltipProps = () => {
    return {
      mouseEnterDelay: 0.75,
      mouseLeaveDelay: 0,
      placement: "bottom",
      ...(displaySize !== "xl" && displaySize !== "lg"
        ? { visible: false }
        : {}),
    };
  };

  return (
    <BuilderContext.Provider value={data as Data}>
      <BuilderContainer>
        <ViewContainer>
          <ResponsiveControlCenterType>
            <ControlCenterMainActions>
              {controlPanelActions.map((option, index) => {
                return (
                  <Tooltip
                    {...createControlPanelTooltipProps()}
                    key={index}
                    overlay={option.description}
                  >
                    <ControlCenterButton onClick={option.action}>
                      {option.icon}
                    </ControlCenterButton>
                  </Tooltip>
                );
              })}
            </ControlCenterMainActions>
            <ControlCenterSettings>
              {controlPanelSettingsOptions.map((option, index) => {
                return (
                  <Tooltip
                    {...createControlPanelTooltipProps()}
                    key={index}
                    overlay={option.description}
                  >
                    <ControlCenterButton onClick={option.action}>
                      {option.icon}
                    </ControlCenterButton>
                  </Tooltip>
                );
              })}
            </ControlCenterSettings>
          </ResponsiveControlCenterType>
          {displaySize !== "xl" && displaySize !== "lg" ? (
            <MobileControlCenter>
              <Drawer anchor={"top"}>
                <div>hello, world</div>
              </Drawer>
            </MobileControlCenter>
          ) : null}
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
            />
          </Drawer>
        ) : (
          <Dashboard isDesktop addBlock={addBlock} panelRight={panelRight} />
        )}
      </BuilderContainer>
    </BuilderContext.Provider>
  );
};

export default Builder;
