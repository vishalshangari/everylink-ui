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
} from "./components";
import { Block, BuilderProps, Data } from "./models";
import { dataImport } from "../../data/test";
import {
  MdAddCircle,
  MdWbSunny,
  MdSwapHoriz,
  MdSettings,
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
    let color =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    setBlocks([...blocks, <Box backgroundColor={color} key={blocks.length} />]);
  };

  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);

  // Render Panel side per user preference

  return (
    <BuilderContext.Provider value={data as Data}>
      <BuilderContainer>
        <ViewContainer>
          <DeviceSimulator>{blocks}</DeviceSimulator>
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
    </BuilderContext.Provider>
  );
};

export default Builder;
