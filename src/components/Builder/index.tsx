import React, { useState, ReactNode } from "react";
import DeviceSimulator from "./DeviceSimulator";
import OptionsTray from "./OptionsTray";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { ViewContainer } from "./ViewContainer";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import Dashboard from "./Dashboard";

import merge from "lodash/merge";
import get from "lodash/get";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Theme, theme } from "../../theme";

type Block = ReactNode;
type AccordionElement = ReactNode;

const InitialElements: Block[] = [];
const InitialAccordionElements: AccordionElement[] = [];

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
  const EXTRA_LARGE = 80;
  const XL = "xl";
  const LARGE = 60;
  const LG = "lg";

  // Get initial display scale for rendering
  const getInitialDisplayScale = () => {
    const rootFontSize = parseInt(
      getComputedStyle(
        document.querySelector("html") as HTMLElement
      ).getPropertyValue("font-size")
    );
    const emRatio = window.innerWidth / rootFontSize;

    if (emRatio >= EXTRA_LARGE) return XL;
    else if (emRatio >= LARGE) {
      return LG;
    }
    return "";
  };

  const [displayScale, setDisplayScale] = useState(getInitialDisplayScale);

  // Set media queries for responsive theming
  useMediaQuery({ minWidth: EXTRA_LARGE + "em" }, undefined, (matches) => {
    if (matches) setDisplayScale(XL);
  });
  useMediaQuery({ maxWidth: EXTRA_LARGE + "em" }, undefined, (matches) => {
    if (matches) setDisplayScale(LG);
  });

  // Generate theme for rendering based on color mode and display scale
  const getTheme = (darkMode: boolean, displayScale: string) =>
    merge({}, theme, {
      colors: get(theme.colors.modes, darkMode ? dark : "", theme.colors),
      scales: get(theme.scales, displayScale, theme.scales),
    });

  // Render Panel side per user preference
  const [panelRight, setPanelRight] = useState(true);

  const currTheme: Theme = getTheme(darkMode, displayScale);
  return (
    <ThemeProvider theme={currTheme}>
      <BuilderContainer>
        <ModeBtn>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Dark" : "Light"}
          </button>
          <button onClick={() => setPanelRight(!panelRight)}>
            {panelRight ? "Right" : "Left"}
          </button>
          <button onClick={addBlock}>Add block</button>
        </ModeBtn>
        <ViewContainer>
          <DeviceSimulator>{blocks}</DeviceSimulator>
        </ViewContainer>
        <Dashboard addBlock={addBlock} panelRight={panelRight} />
      </BuilderContainer>
    </ThemeProvider>
  );
};

// Builder Styled Components

const Box = styled.div`
  background: grey;
`;

const BuilderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  ${(props) => props.theme.flex.row}
  background: ${(props) => props.theme.colors.builderBg};
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
