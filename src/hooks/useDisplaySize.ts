import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { theme } from "../theme";
import { DisplaySizes } from "./DisplaySizes";

const {
  xl: threshold_xl,
  lg: threshold_lg,
  md: threshold_md,
} = theme.breakpoints;

type DisplaySizeHook = () => [
  DisplaySizes,
  (newDisplaySizes: DisplaySizes) => void
];

const useDisplaySize: DisplaySizeHook = () => {
  const getInitialDisplayScale = () => {
    const rootFontSize = parseInt(
      getComputedStyle(
        document.querySelector("html") as HTMLElement
      ).getPropertyValue("font-size")
    );
    const emRatio = window.innerWidth / rootFontSize;

    if (emRatio >= parseInt(threshold_xl)) {
      return DisplaySizes.XL;
    } else if (emRatio >= parseInt(threshold_lg)) {
      return DisplaySizes.LG;
    } else if (emRatio >= parseInt(threshold_md)) {
      return DisplaySizes.MD;
    }

    return DisplaySizes.SM;
  };

  const [displaySize, setDisplaySize] = useState(getInitialDisplayScale);

  useMediaQuery(
    { minWidth: parseInt(threshold_xl) + "em" },
    undefined,
    (matches) => {
      if (matches) handleDisplaySizeChange(DisplaySizes.XL);
    }
  );

  useMediaQuery(
    { query: `(max-width: ${threshold_xl}) and (min-width: ${threshold_lg})` },
    undefined,
    (matches) => {
      if (matches) handleDisplaySizeChange(DisplaySizes.LG);
    }
  );

  useMediaQuery(
    { query: `(max-width: ${threshold_lg}) and (min-width: ${threshold_md})` },
    undefined,
    (matches) => {
      if (matches) handleDisplaySizeChange(DisplaySizes.MD);
    }
  );

  useMediaQuery(
    { query: `(max-width: ${threshold_md})` },
    undefined,
    (matches) => {
      if (matches) handleDisplaySizeChange(DisplaySizes.SM);
    }
  );

  const handleDisplaySizeChange = (newDisplaySize: DisplaySizes) => {
    setDisplaySize(newDisplaySize);
  };

  return [displaySize, handleDisplaySizeChange];
};

export default useDisplaySize;
