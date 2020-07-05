import React, { useState, ReactNode, createContext, useContext } from "react";

// Components
import BuilderContainer from "./BuilderContainer";
import DeviceSimulator from "./DeviceSimulator";
import { ViewContainer } from "./ViewContainer";
import Dashboard from "./Dashboard";

// Utils
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

// Test Data
import Data from "../../dummydata/testInterface";
import dataImport from "../../dummydata/testObject.json";
import useMobileDashboard from "../../hooks/useMobileDashboard";
import { DisplaySizeContext } from "../../contexts/DisplaySizeContext";

const data: Data = dataImport;

type Block = ReactNode;

const InitialElements: Block[] = [];

export const BuilderContext = createContext<Data>({} as Data);

interface BuilderProps {
  handleThemeChange: (newTheme: string) => void;
  currentTheme: string;
}

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

// Temporary Styled Components

const Box = styled.div`
  background: grey;
`;

const ModeBtn = styled.div`
  position: relative;
  justify-content: center;
  top: 1rem;
  left: 1rem;
  button {
    padding: 0.5rem 1rem;
    justify-content: center;
    margin-right: 0.5rem;
  }
  z-index: 999;
`;

export default Builder;
