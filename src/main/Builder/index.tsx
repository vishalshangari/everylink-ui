import React, { useState, createContext, ReactNode } from "react";
import DeviceSimulator from "../Shared/DeviceSimulator";
import Dashboard from "../Shared/Dashboard";
import Drawer from "@material-ui/core/Drawer";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import {
  StyledActionPanel,
  BuilderContainer,
  ViewContainer,
} from "./components";
import { BuilderProps } from "./models";
import {
  MdAddCircle,
  MdWbSunny,
  MdSwapHoriz,
  MdSettings,
} from "react-icons/md";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { DroppapleGrid } from "../Shared/DroppableGrid";
import { devices } from "../Shared/DeviceSimulator/constants";

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

  const [elements, setElements] = useState<{ [key: string]: any }>({});

  const addBlock = () => {
    const id = `${Math.floor(Math.random() * 10000)}`;
    setElements({
      ...elements,
      [id]: {
        top: 20,
        left: 80,
        width: 100,
        height: 100,
        title: "Fuck you x " + id + ", vishal",
      },
    });
  };

  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);
  const [device, setDevice] = useState(devices[0]);

  // Render Panel side per user preference

  return (
    <BuilderContainer>
      <ViewContainer>
        <DeviceSimulator onDeviceChange={setDevice}>
          <DroppapleGrid
            parentHeight={device.height}
            parentWidth={device.width}
            isMobile={displaySize !== "xl" && displaySize !== "lg"}
            elements={elements}
            setElements={setElements}
          />
        </DeviceSimulator>
        <ActionPanel panelRight={panelRight}>
          <Tooltip overlay={<span>Add new container</span>}>
            <button onClick={addBlock}>
              <MdAddCircle />
            </button>
          </Tooltip>
          <Tooltip
            overlay={
              <span>
                Switch to {currentTheme === "dark" ? "default" : "dark"} theme
              </span>
            }
          >
            <button
              onClick={() =>
                handleThemeChange(currentTheme === "dark" ? "" : "dark")
              }
            >
              {currentTheme === "dark" ? (
                <MdWbSunny />
              ) : (
                <WiMoonAltWaningCrescent4 />
              )}
            </button>
          </Tooltip>
          <Tooltip overlay={<span>Switch editor layout</span>}>
            <button onClick={() => setPanelRight(!panelRight)}>
              <MdSwapHoriz />
            </button>
          </Tooltip>

          {displaySize !== "xl" && displaySize !== "lg" && (
            <Tooltip overlay={<span>Open dashboard</span>}>
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
  );
};

export default Builder;
