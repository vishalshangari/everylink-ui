import React, { useState, createContext, ReactNode } from "react";
import DeviceSimulator from "../Shared/DeviceSimulator";
import Dashboard from "../Shared/Dashboard";
import Drawer from "@material-ui/core/Drawer";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import {
  Box,
  StyledActionPanel,
  BuilderContainer,
  ViewContainer,
  ControlCenter,
} from "./components";
import { Block, BuilderProps, Data } from "./models";
import { dataImport } from "../../data/test";
import {
  MdAddCircle,
  MdWbSunny,
  MdSwapHoriz,
  MdSettings,
  MdSave,
  MdUndo,
  MdRedo,
  MdClose,
} from "react-icons/md";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const data: Data = dataImport;

const InitialElements: Block[] = [];

export const BuilderContext = createContext<Data>({} as Data);

interface ActionPanelProps {
  panelRight: boolean;
  children?: ReactNode;
}

const ActionPanel = ({ children, panelRight }: ActionPanelProps) => {
  return (
    <StyledActionPanel panelRight={panelRight}>{children}</StyledActionPanel>
  );
};

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

  const controlPanelTooltipProps = {
    mouseEnterDelay: 0.75,
    mouseLeaveDelay: 0,
    placement: "bottom",
  };

  const sidePanelTooltipProps = {
    mouseEnterDelay: 0.75,
    mouseLeaveDelay: 0,
    placement: "right",
  };

  const log = console.log;

  interface controlPanelActions {
    type: string;
    description: string;
    icon: ReactNode;
    action: () => void;
  }

  const controlPanelActions: controlPanelActions[] = [
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

  interface sidePanelAction {
    type: string;
    description: string;
    icon: ReactNode;
    action: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }

  const sidePanelActions: sidePanelAction[] = [
    {
      type: "Color mode",
      description: `Switch to + ${
        currentTheme === "dark" ? "default" : "dark"
      } + theme`,
      icon:
        currentTheme === "dark" ? <MdWbSunny /> : <WiMoonAltWaningCrescent4 />,
      action: (e) => handleThemeChange(currentTheme === "dark" ? "" : "dark"),
    },
    {
      type: "Editor layout",
      description: "Switch editor layout",
      icon: <MdSwapHoriz />,
      action: (e) => setPanelRight(!panelRight),
    },
  ];

  return (
    <BuilderContext.Provider value={data as Data}>
      <BuilderContainer>
        <ViewContainer>
          <ControlCenter>
            {controlPanelActions.map((option, index) => {
              return (
                <Tooltip
                  {...controlPanelTooltipProps}
                  key={index}
                  overlay={option.description}
                >
                  <button onClick={option.action}>{option.icon}</button>
                </Tooltip>
              );
            })}
          </ControlCenter>
          <DeviceSimulator>{blocks}</DeviceSimulator>
          <ActionPanel panelRight={panelRight}>
            {sidePanelActions.map((option, index) => {
              return (
                <Tooltip
                  {...controlPanelTooltipProps}
                  key={index}
                  overlay={option.description}
                >
                  <button onClick={option.action}>{option.icon}</button>
                </Tooltip>
              );
            })}

            {displaySize !== "xl" && displaySize !== "lg" && (
              <Tooltip
                {...sidePanelTooltipProps}
                overlay={<span>Open dashboard</span>}
              >
                <button
                  onClick={() =>
                    setMobileDashboardOpen(
                      (prevMobileDashboardOpen) => !prevMobileDashboardOpen
                    )
                  }
                >
                  <MdSettings />
                </button>
              </Tooltip>
            )}
          </ActionPanel>
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
