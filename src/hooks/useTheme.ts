import { useState } from "react";
import { DisplaySizes } from "./DisplaySizes";
import { Theme, theme as baseTheme } from "../theme";
import { merge, get } from "lodash";

// type Hook = (
//   {defaultTheme: string,
//   displaySize: DisplaySizes}
// ) => [Theme, () => void];

type Hook = ({
  defaultTheme,
  displaySize,
}: {
  defaultTheme: string;
  displaySize: DisplaySizes;
}) => [(newTheme: string) => Theme, string, (newTheme: string) => void];

const useTheme: Hook = ({ defaultTheme, displaySize }) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme);
  };

  const getNewTheme = (newTheme: string) =>
    merge({}, baseTheme, {
      colors: get(baseTheme.colors.modes, newTheme, baseTheme.colors),
      scales: get(baseTheme.scales, displaySize, baseTheme.scales),
    });

  return [getNewTheme, currentTheme, handleThemeChange];
};

export default useTheme;
