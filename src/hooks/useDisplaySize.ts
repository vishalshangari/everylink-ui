import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { theme } from "../theme";
import { DisplaySizes } from "./models";

const {
  xl: threshold_xl,
  lg: threshold_lg,
  md: threshold_md,
} = theme.breakpoints;

const useDisplaySize = (): [DisplaySizes] => {
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

  const [displaySize, setDisplaySize] = useState(getInitialDisplayScale());

  useMediaQuery(
    { minWidth: parseInt(threshold_xl) + "em" },
    undefined,
    (matches) => {
      if (matches) setDisplaySize(DisplaySizes.XL);
    }
  );

  useMediaQuery(
    { query: `(max-width: ${threshold_xl}) and (min-width: ${threshold_lg})` },
    undefined,
    (matches) => {
      if (matches) setDisplaySize(DisplaySizes.LG);
    }
  );

  useMediaQuery(
    { query: `(max-width: ${threshold_lg}) and (min-width: ${threshold_md})` },
    undefined,
    (matches) => {
      if (matches) setDisplaySize(DisplaySizes.MD);
    }
  );

  useMediaQuery(
    { query: `(max-width: ${threshold_md})` },
    undefined,
    (matches) => {
      if (matches) setDisplaySize(DisplaySizes.SM);
    }
  );

  return [displaySize];
};

export default useDisplaySize;
