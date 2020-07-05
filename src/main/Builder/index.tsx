import React, { useState, createContext } from "react";

// Components
import BuilderContainer from "../Shared/Container";
import DeviceSimulator from "../Shared/DeviceSimulator";
import { ViewContainer } from "../Shared/Container/components";
import Dashboard from "../Shared/Dashboard";

// Utils
import merge from "lodash/merge";
import get from "lodash/get";
import { ThemeProvider } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Theme, theme } from "../../theme";
import Drawer from "@material-ui/core/Drawer";
import { dataImport } from "../../data/test";
import { Box } from "@material-ui/core";
import { ModeBtn } from "./components";
import { Block, AccordionElement, Data } from "./models";

const data: Data = dataImport;

export const BuilderContext = createContext<Data>({} as Data);

export const InitialElements: Block[] = [];
export const InitialAccordionElements: AccordionElement[] = [];

const Builder = () => {
  const [blocks, setBlocks] = useState(InitialElements);
  const addBlock = () => {
    console.log(blocks);
    setBlocks([
      ...blocks,
      <Box key={blocks.length} data-grid={{ x: 0, y: 0, h: 10, w: 12 }} />,
    ]);
  };

  // Set Default color mode
  const [darkMode, setDarkMode] = useState(
    process.env.REACT_APP_DEV_DARK_MODE == "true"
  );
  const dark = "dark";

  // Responsive media query constants
  const threshold_xl = theme.breakpoints.xl;
  const XL = "xl";
  const threshold_lg = theme.breakpoints.lg;
  const LG = "lg";
  const threshold_md = theme.breakpoints.md;
  const MD = "md";
  const SM = "sm";

  // Get initial display scale for rendering
  const getInitialDisplayScale = () => {
    const rootFontSize = parseInt(
      getComputedStyle(
        document.querySelector("html") as HTMLElement
      ).getPropertyValue("font-size")
    );
    const emRatio = window.innerWidth / rootFontSize;

    if (emRatio >= parseInt(threshold_xl)) return XL;
    else if (emRatio >= parseInt(threshold_lg)) {
      return LG;
    } else if (emRatio >= parseInt(threshold_md)) {
      return MD;
    }

    return SM;
  };

  const [displaySize, setDisplaySize] = useState(getInitialDisplayScale);

  // Set media queries for responsive theming
  useMediaQuery(
    { minWidth: parseInt(threshold_xl) + "em" },
    undefined,
    (matches) => {
      if (matches) setDisplaySize(XL);
    }
  );

  useMediaQuery(
    { query: `(max-width: ${threshold_xl}) and (min-width: ${threshold_lg})` },
    undefined,
    (matches) => {
      if (matches) setDisplaySize(LG);
    }
  );

  const isMobile = useMediaQuery({ maxWidth: parseInt(threshold_lg) + "em" });

  useMediaQuery(
    { query: `(max-width: ${threshold_lg}) and (min-width: ${threshold_md})` },
    undefined,
    (matches) => {
      if (matches) setDisplaySize(MD);
    }
  );

  useMediaQuery(
    { query: `(max-width: ${threshold_md})` },
    undefined,
    (matches) => {
      if (matches) setDisplaySize(SM);
    }
  );

  // Generate theme for rendering based on color mode and display scale
  const getTheme = (darkMode: boolean, displayScale: string) =>
    merge({}, theme, {
      colors: get(theme.colors.modes, darkMode ? dark : "", theme.colors),
      scales: get(theme.scales, displayScale, theme.scales),
    });

  const currTheme: Theme = getTheme(darkMode, displaySize);

  // Handle Mobile Drawer Dashboard
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Render Panel side per user preference
  const [panelRight, setPanelRight] = useState(true);

  return (
    <ThemeProvider theme={currTheme}>
      <BuilderContext.Provider value={data as Data}>
        <BuilderContainer>
          <ViewContainer>
            <DeviceSimulator>{blocks}</DeviceSimulator>
            <ModeBtn>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Dark" : "Light"}
              </button>
              <button onClick={() => setPanelRight(!panelRight)}>
                {panelRight ? "Right" : "Left"}
              </button>
              <button onClick={addBlock}>Add block</button>
              <button onClick={handleDrawerToggle}>Drawer</button>
            </ModeBtn>
          </ViewContainer>
          {/* Mobile Temporary Drawer Dashboard */}
          {isMobile && (
            <Drawer
              open={mobileOpen}
              anchor={panelRight ? "right" : "left"}
              variant={"temporary"}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <Dashboard addBlock={addBlock} panelRight={panelRight} />
            </Drawer>
          )}
          {/* Desktop Persistent Dashboard */}
          {!isMobile && (
            <Dashboard addBlock={addBlock} panelRight={panelRight} />
          )}
        </BuilderContainer>
      </BuilderContext.Provider>
    </ThemeProvider>
  );
};

export default Builder;
