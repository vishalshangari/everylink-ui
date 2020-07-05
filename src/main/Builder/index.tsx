import React, { useState, createContext, useContext } from "react";
import DeviceSimulator from "../Shared/DeviceSimulator";
import Dashboard from "../Shared/Dashboard";
import Drawer from "@material-ui/core/Drawer";
import { Box } from "@material-ui/core";
import { BuilderContainer, ModeBtn, ViewContainer } from "./components";
import { Block, BuilderProps, Data } from "./models";
import { dataImport } from "../../data/test";

const data: Data = dataImport;

const InitialElements: Block[] = [];

export const BuilderContext = createContext<Data>({} as Data);

const Builder: React.FC<BuilderProps> = (props) => {
  const [panelRight, setPanelRight] = useState(true);
  const { displaySize, handleThemeChange, currentTheme } = props;
  const [blocks, setBlocks] = useState(InitialElements);
  const addBlock = () => {
    console.log(blocks);
    setBlocks([
      ...blocks,
      <Box key={blocks.length} data-grid={{ x: 0, y: 0, h: 10, w: 12 }} />,
    ]);
  };

  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);

  // Render Panel side per user preference

  return (
    <BuilderContext.Provider value={data as Data}>
      <BuilderContainer>
        <ViewContainer>
          <DeviceSimulator>{blocks}</DeviceSimulator>
          <ModeBtn>
            <button
              onClick={() =>
                handleThemeChange(currentTheme === "dark" ? "" : "dark")
              }
            >
              {currentTheme === "dark" ? "dark" : "default"}
            </button>
            <button onClick={() => setPanelRight(!panelRight)}>
              {panelRight ? "Right" : "Left"}
            </button>
            <button onClick={addBlock}>Add block</button>
            {displaySize !== "xl" && displaySize !== "lg" && (
              <button
                onClick={() =>
                  setMobileDashboardOpen(
                    (prevMobileDashboardOpen) => !prevMobileDashboardOpen
                  )
                }
              >
                Drawer
              </button>
            )}
          </ModeBtn>
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
