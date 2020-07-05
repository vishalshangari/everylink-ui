import React, { useState, createContext, useContext } from "react";
import DeviceSimulator from "../Shared/DeviceSimulator";
import Dashboard from "../Shared/Dashboard";
import Drawer from "@material-ui/core/Drawer";
import useMobileDashboard from "../../hooks/useMobileDashboard";
import { DisplaySizeContext } from "../../contexts/DisplaySizeContext";
import { Box } from "@material-ui/core";
import { BuilderContainer, ModeBtn, ViewContainer } from "./components";
import { Block, BuilderProps, Data } from "./models";
import { dataImport } from "../../data/test";

const data: Data = dataImport;

const InitialElements: Block[] = [];

export const BuilderContext = createContext<Data>({} as Data);

const Builder: React.FC<BuilderProps> = (props) => {
  const [panelRight, setPanelRight] = useState(true);
  const displaySize = useContext(DisplaySizeContext);
  const [blocks, setBlocks] = useState(InitialElements);
  const addBlock = () => {
    console.log(blocks);
    setBlocks([
      ...blocks,
      <Box key={blocks.length} data-grid={{ x: 0, y: 0, h: 10, w: 12 }} />,
    ]);
  };

  const [mobileDashboardOpen, handleMobileDashboardToggle] = useMobileDashboard(
    false
  );

  // Render Panel side per user preference

  return (
    <BuilderContext.Provider value={data as Data}>
      <BuilderContainer>
        <ViewContainer>
          <DeviceSimulator>{blocks}</DeviceSimulator>
          <ModeBtn>
            <button
              onClick={() =>
                props.handleThemeChange(
                  props.currentTheme === "dark" ? "" : "dark"
                )
              }
            >
              {props.currentTheme === "dark" ? "dark" : "default"}
            </button>
            <button onClick={() => setPanelRight(!panelRight)}>
              {panelRight ? "Right" : "Left"}
            </button>
            <button onClick={addBlock}>Add block</button>
            {displaySize !== "xl" && displaySize !== "lg" && (
              <button onClick={handleMobileDashboardToggle}>Drawer</button>
            )}
          </ModeBtn>
        </ViewContainer>
        {/* Mobile Temporary Drawer Dashboard */}
        {displaySize !== "xl" && displaySize !== "lg" ? (
          <Drawer
            open={mobileDashboardOpen}
            anchor={panelRight ? "right" : "left"}
            variant={"temporary"}
            onClose={handleMobileDashboardToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Dashboard addBlock={addBlock} panelRight={panelRight} />
          </Drawer>
        ) : (
          <Dashboard addBlock={addBlock} panelRight={panelRight} />
        )}
      </BuilderContainer>
    </BuilderContext.Provider>
  );
};

export default Builder;
